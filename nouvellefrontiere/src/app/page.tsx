///Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import { FaUser, FaSpinner, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ChatbotAI from './components/ChatbotAI';
import TripFilters from './components/TripFilters';
import TravelCard from './components/TravelCard';
import { api, Destination } from '@/data/mockApiData';
import Footer from './components/Footer';

export default function Home() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filters, setFilters] = useState({
    priceRange: [0, 2000],
    duration: 'all',
    sustainability: false,
    destination: '',
    departureCity: '',
    departureDate: '',
    tripType: '',
    travelers: '',
    rating: '',
  });

  useEffect(() => {
    loadDestinations();
  }, []);

  const loadDestinations = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getDestinations();
      setDestinations(data);
    } catch (error) {
      console.error('Error loading destinations:', error);
      setError('Impossible de charger les destinations. Veuillez réessayer plus tard.');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    setCurrentIndex(0); // Reset carousel position when filters change
  };

  const nextCards = () => {
    setCurrentIndex((prevIndex) => 
      Math.min(prevIndex + 3, filteredDestinations.length - 3)
    );
  };

  const previousCards = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 3, 0));
  };

  const filteredDestinations = destinations.filter(dest => {
    const matchesPrice = dest.price.amount >= filters.priceRange[0] && 
                        dest.price.amount <= filters.priceRange[1];
    const matchesDuration = filters.duration === 'all' || 
                          (filters.duration === 'short' && dest.duration <= 7) ||
                          (filters.duration === 'long' && dest.duration > 7);
    const matchesSustainability = !filters.sustainability || 
                                dest.carbonFootprint < 1.0;
    
    return matchesPrice && matchesDuration && matchesSustainability;
  });

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img 
            src="/tui-logo.png" 
            alt="TUI" 
            className={styles.logoImage}
          />
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Séjours</a></li>
            <li><a href="#">Club Marmara</a></li>
            <li><a href="#">Club Lookéa</a></li>
            <li><a href="#">Nouvelles Frontières</a></li>
            <li><a href="#">Vols</a></li>
            <li><a href="#">Destinations</a></li>
          </ul>
        </nav>
        <button className={styles.loginButton}>
          <FaUser />
        </button>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>
            Circuit<br />
            Nouvelles Frontières
          </h1>
          <p className={styles.subtitle}>
            Découvrez nos voyages éco-responsables
          </p>
        </section>

        <TripFilters 
          filters={filters}
          onChange={handleFilterChange}
        />

        <section className={styles.destinationsSection}>
          {loading ? (
            <div className={styles.loadingContainer}>
              <FaSpinner className={styles.spinner} />
              <p>Chargement des destinations...</p>
            </div>
          ) : error ? (
            <div className={styles.errorContainer}>
              <p className={styles.errorMessage}>{error}</p>
              <button 
                onClick={loadDestinations}
                className={styles.retryButton}
              >
                Réessayer
              </button>
            </div>
          ) : (
            <>
              <div className={styles.resultsHeader}>
                <h2 className={styles.resultsTitle}>
                  {filteredDestinations.length} destinations trouvées
                </h2>
                <div className={styles.sortOptions}>
                  <select className={styles.sortSelect}>
                    <option value="price-asc">Prix croissant</option>
                    <option value="price-desc">Prix décroissant</option>
                    <option value="eco">Impact écologique</option>
                    <option value="duration">Durée</option>
                  </select>
                </div>
              </div>

              <div className={styles.carouselContainer}>
                <button 
                  className={`${styles.carouselButton} ${styles.prevButton}`}
                  onClick={previousCards}
                  disabled={currentIndex === 0}
                >
                  <FaChevronLeft />
                </button>

                <div className={styles.travelCardsContainer}>
                  {filteredDestinations
                    .slice(currentIndex, currentIndex + 3)
                    .map((destination) => (
                      <TravelCard
                        key={destination.id}
                        destination={destination}
                      />
                    ))}
                </div>

                <button 
                  className={`${styles.carouselButton} ${styles.nextButton}`}
                  onClick={nextCards}
                  disabled={currentIndex >= filteredDestinations.length - 3}
                >
                  <FaChevronRight />
                </button>
              </div>

              <div className={styles.paginationDots}>
                {Array.from({ length: Math.ceil(filteredDestinations.length / 3) }).map((_, index) => (
                  <span
                    key={index}
                    className={`${styles.dot} ${index === Math.floor(currentIndex / 3) ? styles.active : ''}`}
                    onClick={() => setCurrentIndex(index * 3)}
                  />
                ))}
              </div>

              {filteredDestinations.length === 0 && (
                <div className={styles.noResults}>
                  <p>Aucune destination ne correspond à vos critères.</p>
                  <button 
                    onClick={() => {
                      setFilters({
                        priceRange: [0, 2000],
                        duration: 'all',
                        sustainability: false,
                        destination: '',
                        departureCity: '',
                        departureDate: '',
                        tripType: '',
                        travelers: '',
                        rating: '',
                      });
                      setCurrentIndex(0);
                    }}
                    className={styles.resetButton}
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}
            </>
          )}
        </section>
      </main>

      <ChatbotAI />
      <Footer />
    </div>
  );
}
