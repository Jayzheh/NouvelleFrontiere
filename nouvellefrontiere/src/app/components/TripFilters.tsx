// /Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/app/components/TripFilters.tsx

import React from 'react';
import styles from './TripFilters.module.css';
import { FaMapMarkerAlt, FaPlane, FaCalendarAlt, FaUsers, FaStar } from 'react-icons/fa';

const TripFilters: React.FC = () => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterGrid}>
        <div className={styles.filterItem}>
          <label htmlFor="destination">
            <FaMapMarkerAlt className={styles.icon} />
            Destination
          </label>
          <input 
            type="text" 
            id="destination" 
            placeholder="Où allez-vous ?" 
            className={styles.input}
          />
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="departureCity">
            <FaPlane className={styles.icon} />
            Ville de départ
          </label>
          <input 
            type="text" 
            id="departureCity" 
            placeholder="D'où partez-vous ?" 
            className={styles.input}
          />
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="departureDate">
            <FaCalendarAlt className={styles.icon} />
            Date de départ
          </label>
          <input 
            type="date" 
            id="departureDate" 
            className={styles.input}
          />
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="tripType">Type de voyage</label>
          <select id="tripType" className={styles.select}>
            <option value="">Sélectionnez</option>
            <option value="circuit">Circuit</option>
            <option value="sejour">Séjour</option>
          </select>
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="travelers">
            <FaUsers className={styles.icon} />
            Voyageurs
          </label>
          <input 
            type="number" 
            id="travelers" 
            min="1" 
            placeholder="Nombre de personnes" 
            className={styles.input}
          />
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="rating">
            <FaStar className={styles.icon} />
            Avis voyageurs
          </label>
          <select id="rating" className={styles.select}>
            <option value="">Sélectionnez</option>
            <option value="5">5 étoiles</option>
            <option value="4">4 étoiles et plus</option>
            <option value="3">3 étoiles et plus</option>
          </select>
        </div>
      </div>

      <div className={styles.priceFilter}>
        <label htmlFor="price">Prix</label>
        <input 
          type="range" 
          id="price" 
          min="0" 
          max="10000" 
          step="100" 
          className={styles.rangeInput}
        />
        <div className={styles.priceLabels}>
          <span>0 €</span>
          <span>10 000 €</span>
        </div>
      </div>
    </div>
  );
};

export default TripFilters;