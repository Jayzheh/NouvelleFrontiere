// /Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/app/components/TravelCard.tsx
'use client';

import React, { useState } from 'react';
import styles from './TravelCard.module.css';
import Image from 'next/image';
import { Destination } from '@/data/mockApiData';
import { FaStar, FaLeaf, FaPlane } from 'react-icons/fa';

interface TravelCardProps {
  destination: Destination;
}

const TravelCard: React.FC<TravelCardProps> = ({ destination }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className={styles.card}>
      <div className={styles.imageSection}>
        <div className={styles.ecoLabel}>
          <FaLeaf /> Éco-responsable
        </div>
        <Image 
          src={destination.images[currentImageIndex]} 
          alt={destination.name}
          width={300}
          height={200}
          className={styles.image}
          priority
        />
        <div className={styles.imageNavigation}>
          {destination.images.map((_, index) => (
            <span 
              key={index}
              className={`${styles.dot} ${currentImageIndex === index ? styles.activeDot : ''}`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
      
      <div className={styles.contentSection}>
        <div className={styles.header}>
          <h3 className={styles.title}>{destination.name}</h3>
          <div className={styles.rating}>
            <FaStar className={styles.starIcon} />
            {destination.accommodation.rating}
          </div>
        </div>
        
        <p className={styles.location}>
          <FaPlane className={styles.planeIcon} />
          {destination.city}, {destination.country}
        </p>
        
        <div className={styles.details}>
          <p className={styles.duration}>{destination.duration} jours</p>
          <p className={styles.carbonFootprint}>
            <FaLeaf className={styles.leafIcon} />
            {destination.carbonFootprint} tonnes CO2
          </p>
        </div>

        <ul className={styles.features}>
          {destination.features.map((feature, index) => (
            <li key={index} className={styles.feature}>
              <span className={styles.featureIcon}>•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.priceSection}>
        <div className={styles.priceContainer}>
          <p className={styles.priceLabel}>{destination.duration} jours dès</p>
          <p className={styles.price}>
            {destination.price.amount}€ <span className={styles.priceNote}>p.p.</span>
          </p>
        </div>
        <button className={styles.discoverButton}>
          {destination.availability > 0 ? 'Découvrir' : 'Complet'}
        </button>
      </div>
    </div>
  );
};

export default TravelCard;