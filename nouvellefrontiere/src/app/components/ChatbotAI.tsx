// /Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/app/components/ChatbotAI.tsx
import React from 'react';
import styles from './ChatbotAI.module.css';

const ChatbotAI: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Découvrez notre nouvelle IA<br />
        entièrement éco-responsable
      </h2>
      <button className={styles.button}>Testez par vous-même !</button>
    </div>
  );
};

export default ChatbotAI;