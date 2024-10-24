// /Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/app/components/Footer.tsx

'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletterSection}>
        <div className={styles.newsletterForm}>
          <Image 
            src="/newsletter-icon.png" 
            alt="Newsletter" 
            width={24} 
            height={24} 
            className={styles.mailIcon}
          />
          <span>Recevez nos offres personnalisées</span>
          <div className={styles.formInputs}>
            <input type="email" placeholder="E-mail" className={styles.emailInput} />
            <select className={styles.citySelect}>
              <option value="">Ville de départ</option>
              {/* Add cities here */}
            </select>
            <button className={styles.subscribeButton}>Je m'inscris</button>
          </div>
        </div>
        
        <div className={styles.socialLinks}>
          <span>Suivez-nous sur les réseaux sociaux</span>
          <div className={styles.socialIcons}>
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>

      <div className={styles.linksSection}>
        <div className={styles.linkColumn}>
          <h4>À propos de TUI</h4>
          <ul>
            <li>TUI l'agence de voyages</li>
            <li>Qui sommes nous ?</li>
            <li>Espace presse</li>
            <li>TUI, acteur du tourisme durable</li>
            <li>Mentions légales</li>
            <li>CGV et CGU</li>
            <li>Politique de confidentialité</li>
            <li>Politique de cookies</li>
            <li>Gérer mes cookies</li>
            <li>Plan de site</li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h4>Avant de partir</h4>
          <ul>
            <li>Bon à savoir</li>
            <li>Formalités, visas, santé</li>
            <li>Services additionnels</li>
            <li>Nos assurances</li>
            <li>Vidéos des Clubs</li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h4>Nos services</h4>
          <ul>
            <li>Notre devise</li>
            <li>Demande devis groupe</li>
            <li>Nos brochures en ligne</li>
            <li>Espace pro voyages</li>
            <li>Devenir Agence TUI Store</li>
            <li>Devenir Affilié</li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h4>Infos pratiques</h4>
          <ul>
            <li>Contactez nous</li>
            <li>Avis clients</li>
            <li>Voyager avec TUI</li>
            <li>Travailler chez TUI</li>
            <li>Se former chez TUI</li>
            <li>Votre avis sur le site</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h4>Bons plans voyage</h4>
          <ul>
            <li>Séjours</li>
            <li>Voyage tout compris</li>
            <li>Voyage dernière minute</li>
            <li>Voyage pas cher</li>
            <li>Où partir en vacances ?</li>
            <li>Villages vacances</li>
            <li>Code promo TUI</li>
          </ul>
        </div>
      </div>

      <div className={styles.paymentSection}>
        <p>Moyens de paiement acceptés et 100% sécurisés</p>
        <div className={styles.paymentMethods}>
          {/* Add payment method logos here */}
        </div>
      </div>

      <div className={styles.bottomSection}>
        <div className={styles.tuiLogo}>
          <span>Chez</span>
          <Image 
            src="/tui-logo.png" 
            alt="TUI" 
            width={50} 
            height={20}
          />
          <span>, voyagez avec le sourire !</span>
        </div>
        <div className={styles.countrySelect}>
          <Image 
            src="/france-flag.png" 
            alt="France" 
            width={20} 
            height={15}
          />
          <span>France</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;