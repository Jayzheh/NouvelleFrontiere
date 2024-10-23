///Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/app/page.tsx
import styles from './page.module.css';
import { FaUser } from 'react-icons/fa';
import ChatbotAI from './components/ChatbotAI';
import TripFilters from './components/TripFilters';
import TravelCard from './components/TravelCard';

export default function Home() {

   // Sample travel data
   const travelCards = [
    {
      id: 1,
      image: "/malta.jpg", 
      title: "City Trip à La Valette",
      location: "Malte",
      price: 301,
      features: ['Vol inclus', 'Petit déjeuner']
    },
    {
      id: 2,
      image: "/malta.jpg", 
      title: "City Trip à La Valette",
      location: "Malte",
      price: 301,
      features: ['Vol inclus', 'Petit déjeuner']
    },
    {
      id: 3,
      image: "/malta.jpg", 
      title: "City Trip à La Valette",
      location: "Malte",
      price: 301,
      features: ['Vol inclus', 'Petit déjeuner']
    },
    // Add more below 
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>TUI</div>
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
        <h1 className={styles.title}>
          Circuit<br />
          Nouvelles Frontières
        </h1>
      </main>
      <ChatbotAI />
      <TripFilters />
      <div className={styles.travelCardsContainer}>
        {travelCards.map((card) => (
          <TravelCard
            key={card.id}
            image={card.image}
            title={card.title}
            location={card.location}
            price={card.price}
            features={card.features}
          />
        ))}
      </div>
    </div>
  );
}
