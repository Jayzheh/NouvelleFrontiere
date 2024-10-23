// /Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/app/components/TravelCard.tsx
'use client';

import React from 'react';
import styles from './TravelCard.module.css';
import Image from 'next/image';

interface TravelCardProps {
  image: string;
  title: string;
  location: string;
  price: number;
  features: string[];
}

const TravelCard: React.FC<TravelCardProps> = ({ image, title, location, price, features }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageSection}>
        <Image 
          src={image} 
          alt={title}
          width={300}
          height={200}
          className={styles.image}
        />
        <div className={styles.imageNavigation}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
      
      <div className={styles.contentSection}>
        <div className={styles.details}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.location}>{location}</p>
          <ul className={styles.features}>
            {features.map((feature, index) => (
              <li key={index} className={styles.feature}>
                <span className={styles.featureIcon}>•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.priceSection}>
        <div className={styles.priceContainer}>
          <p className={styles.priceLabel}>2 nuits dès</p>
          <p className={styles.price}>
            {price}€ <span className={styles.priceNote}>p.p.</span>
          </p>
        </div>
        <button className={styles.discoverButton}>Découvrir</button>
      </div>
    </div>
  );
};

export default TravelCard;