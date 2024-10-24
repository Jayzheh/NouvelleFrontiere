// /Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/app/components/TripFilters.tsx

'use client';

import React, { useState } from 'react';
import styles from './TripFilters.module.css';
import { FaMapMarkerAlt, FaPlane, FaCalendarAlt, FaUsers, FaStar, FaLeaf } from 'react-icons/fa';

interface FilterOptions {
  priceRange: number[];
  duration: string;
  sustainability: boolean;
  destination: string;
  departureCity: string;
  departureDate: string;
  tripType: string;
  travelers: string;
  rating: string;
}

interface TripFiltersProps {
  filters: FilterOptions;
  onChange: (newFilters: FilterOptions) => void;
}

const TripFilters: React.FC<TripFiltersProps> = ({ filters, onChange }) => {
  const [priceValue, setPriceValue] = useState(filters.priceRange[1]);

  const handleInputChange = (field: keyof FilterOptions, value: any) => {
    onChange({
      ...filters,
      [field]: value
    });
  };

  const handlePriceChange = (value: number) => {
    setPriceValue(value);
    onChange({
      ...filters,
      priceRange: [0, value]
    });
  };

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
            value={filters.destination}
            onChange={(e) => handleInputChange('destination', e.target.value)}
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
            value={filters.departureCity}
            onChange={(e) => handleInputChange('departureCity', e.target.value)}
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
            value={filters.departureDate}
            onChange={(e) => handleInputChange('departureDate', e.target.value)}
          />
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="tripType">
            <FaLeaf className={styles.icon} />
            Type de voyage
          </label>
          <select 
            id="tripType" 
            className={styles.select}
            value={filters.tripType}
            onChange={(e) => handleInputChange('tripType', e.target.value)}
          >
            <option value="">Sélectionnez</option>
            <option value="circuit">Circuit</option>
            <option value="sejour">Séjour</option>
            <option value="eco">Éco-responsable</option>
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
            value={filters.travelers}
            onChange={(e) => handleInputChange('travelers', e.target.value)}
          />
        </div>

        <div className={styles.filterItem}>
          <label htmlFor="rating">
            <FaStar className={styles.icon} />
            Avis voyageurs
          </label>
          <select 
            id="rating" 
            className={styles.select}
            value={filters.rating}
            onChange={(e) => handleInputChange('rating', e.target.value)}
          >
            <option value="">Sélectionnez</option>
            <option value="5">5 étoiles</option>
            <option value="4">4 étoiles et plus</option>
            <option value="3">3 étoiles et plus</option>
          </select>
        </div>
      </div>

      <div className={styles.priceFilter}>
        <label htmlFor="price">
          Prix maximum: {priceValue}€
        </label>
        <input 
          type="range" 
          id="price" 
          min="0" 
          max="10000" 
          step="100" 
          className={styles.rangeInput}
          value={priceValue}
          onChange={(e) => handlePriceChange(Number(e.target.value))}
        />
        <div className={styles.priceLabels}>
          <span>0 €</span>
          <span>10 000 €</span>
        </div>
      </div>

      <div className={styles.filterItem}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={filters.sustainability}
            onChange={(e) => handleInputChange('sustainability', e.target.checked)}
          />
          <FaLeaf className={styles.icon} />
          Uniquement les voyages éco-responsables
        </label>
      </div>
    </div>
  );
};

export default TripFilters;