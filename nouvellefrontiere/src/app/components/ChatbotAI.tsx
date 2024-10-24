// /Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/app/components/ChatbotAI.tsx

'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './ChatbotAI.module.css';
import { FaPaperPlane, FaTimes, FaLeaf } from 'react-icons/fa';
import Image from 'next/image';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const ChatbotAI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOpen = () => {
    setIsOpen(true);
    const initialMessage: Message = {
      id: Date.now(),
      text: "Bonjour! Je suis votre assistant voyage éco-responsable TUI. Comment puis-je vous aider à planifier un voyage durable aujourd'hui?",
      sender: 'bot'
    };
    setMessages([initialMessage]);
  };

  const handleClose = () => {
    setIsOpen(false);
    setMessages([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      const botMessage: Message = {
        id: Date.now(),
        text: data.response || "Je suis désolé, je n'ai pas pu traiter votre demande.",
        sender: 'bot'
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: Date.now(),
        text: "Désolé, une erreur s'est produite. Veuillez réessayer.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {!isOpen ? (
        <div className={styles.closedContainer}>
          <h2 className={styles.title}>
            Voyager avec le sourire avec<br />
            notre nouvelle IA éco-responsable
          </h2>
          <button 
            className={styles.openButton} 
            onClick={handleOpen}
          >
            <FaLeaf className={styles.leafIcon} />
            Commencer par poser une question ...
          </button>
        </div>
      ) : (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div className={styles.headerContent}>
              <FaLeaf className={styles.headerIcon} />
              <h3>Assistant Voyage Éco-responsable</h3>
            </div>
            <button 
              className={styles.closeButton} 
              onClick={handleClose}
              aria-label="Fermer"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className={styles.messagesContainer}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`${styles.message} ${
                  message.sender === 'user' ? styles.userMessage : styles.botMessage
                }`}
              >
                {message.sender === 'bot' && (
                  <div className={styles.botIcon}>
                    <Image
                      src="/tui-logo.png"
                      alt="TUI Bot"
                      width={24}
                      height={24}
                    />
                  </div>
                )}
                <div className={styles.messageContent}>
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={styles.loadingMessage}>
                <div className={styles.typingDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Posez votre question sur le voyage durable..."
              className={styles.input}
              disabled={isLoading}
            />
            <button 
              type="submit" 
              className={styles.sendButton}
              disabled={isLoading || !inputText.trim()}
              aria-label="Envoyer"
            >
              <FaPaperPlane />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatbotAI;