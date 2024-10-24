// /Users/danlynmedou/Desktop/NouvelleFrontiere/nouvellefrontiere/src/data/mockApiData.ts

export interface Airport {
    iatacode: string;
    name: string;
    cityname: string;
    countrycode: string;
    latitude: number;
    longitude: number;
    istopdestination: boolean;
  }
  
  export interface City {
    id: string;
    name: string;
    countryCode: string;
    latitude: number;
    longitude: number;
    description: string;
    images: string[];
    popularDestinations: Destination[];
  }
  
  export interface Destination {
    id: string;
    name: string;
    city: string;
    country: string;
    airport: string;
    price: {
      amount: number;
      currency: string;
    };
    dates: {
      departure: string;
      return: string;
    };
    duration: number;
    accommodation: {
      name: string;
      type: string;
      rating: number;
      sustainability: string[];
    };
    features: string[];
    carbonFootprint: number;
    images: string[];
    availability: number;
  }
  
  export const mockDestinations: Destination[] = [
    {
      id: "dest-001",
      name: "Séjour Éco Malta Experience",
      city: "La Valette",
      country: "Malte",
      airport: "MLA",
      price: {
        amount: 499,
        currency: "EUR"
      },
      dates: {
        departure: "2024-11-15",
        return: "2024-11-22"
      },
      duration: 7,
      accommodation: {
        name: "Malta Eco Resort",
        type: "Hotel",
        rating: 4.5,
        sustainability: [
          "Énergie solaire",
          "Recyclage",
          "Agriculture locale"
        ]
      },
      features: [
        "Transport aéroport inclus",
        "Petit-déjeuner bio",
        "Excursions écologiques",
        "Location de vélos"
      ],
      carbonFootprint: 0.8,
      images: [
        "/destinations/malta/malta1.jpg",
        "/destinations/malta/malta2.jpg",
        "/destinations/malta/malta3.jpg"
      ],
      availability: 12
    },
    {
        id: "dest-002",
        name: "Circuit Croatie Verte",
        city: "Split",
        country: "Croatie",
        airport: "SPU",
        price: {
          amount: 699,
          currency: "EUR"
        },
        dates: {
          departure: "2024-12-01",
          return: "2024-12-08"
        },
        duration: 7,
        accommodation: {
          name: "Eco Lodge Split",
          type: "Lodge",
          rating: 4.8,
          sustainability: ["Panneaux solaires", "Agriculture bio"]
        },
        features: ["Vol inclus", "Pension complète"],
        images: ["/croatia.jpg"],
        carbonFootprint: 0.6,
        availability: 8
      },
      {
        id: "dest-003",
        name: "Portugal Authentique",
        city: "Porto",
        country: "Portugal",
        airport: "OPO",
        price: {
          amount: 599,
          currency: "EUR"
        },
        dates: {
          departure: "2024-10-05",
          return: "2024-10-12"
        },
        duration: 7,
        accommodation: {
          name: "Quinta Eco Resort",
          type: "Agritourisme",
          rating: 4.7,
          sustainability: ["Permaculture", "Énergie éolienne", "Produits locaux"]
        },
        features: [
          "Train inclus",
          "Dégustation vins bio",
          "Cours de cuisine locale",
          "Visite vignobles"
        ],
        images: ["/destinations/portugal/porto1.jpg"],
        carbonFootprint: 0.4,
        availability: 15
      },
      {
        id: "dest-004",
        name: "Écosse Sauvage",
        city: "Édimbourg",
        country: "Royaume-Uni",
        airport: "EDI",
        price: {
          amount: 899,
          currency: "EUR"
        },
        dates: {
          departure: "2024-09-20",
          return: "2024-09-27"
        },
        duration: 7,
        accommodation: {
          name: "Highland Eco Lodge",
          type: "Lodge",
          rating: 4.9,
          sustainability: ["Énergie hydraulique", "Protection faune", "Matériaux locaux"]
        },
        features: [
          "Train inclus",
          "Randonnées Highlands",
          "Observation faune",
          "Whisky tasting"
        ],
        images: ["/destinations/scotland/edinburgh1.jpg"],
        carbonFootprint: 0.3,
        availability: 6
      },
      {
        id: "dest-005",
        name: "Fjords Norvégiens",
        city: "Bergen",
        country: "Norvège",
        airport: "BGO",
        price: {
          amount: 1299,
          currency: "EUR"
        },
        dates: {
          departure: "2024-08-15",
          return: "2024-08-22"
        },
        duration: 7,
        accommodation: {
          name: "Fjord View Eco Hotel",
          type: "Hotel",
          rating: 4.8,
          sustainability: ["Géothermie", "Pêche durable", "Construction bois local"]
        },
        features: [
          "Train scenic inclus",
          "Croisière fjords",
          "Pêche responsable",
          "Randonnée glaciers"
        ],
        images: ["/destinations/norway/bergen1.jpg"],
        carbonFootprint: 0.5,
        availability: 10
      },
      {
        id: "dest-006",
        name: "Toscane Authentique",
        city: "Florence",
        country: "Italie",
        airport: "FLR",
        price: {
          amount: 699,
          currency: "EUR"
        },
        dates: {
          departure: "2024-10-10",
          return: "2024-10-17"
        },
        duration: 7,
        accommodation: {
          name: "Agriturismo Bio",
          type: "Ferme",
          rating: 4.6,
          sustainability: ["Agriculture bio", "Énergie solaire", "Cuisine km0"]
        },
        features: [
          "Train inclus",
          "Cours cuisine toscane",
          "Vélo électrique",
          "Dégustation vins bio"
        ],
        images: ["/destinations/italy/florence1.jpg"],
        carbonFootprint: 0.4,
        availability: 8
      }
    // Add more destinations...
  ];
  
  // Mock API functions
  export const api = {
    async getDestinations(): Promise<Destination[]> {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      return mockDestinations;
    },
  
    async getDestination(id: string): Promise<Destination | null> {
      await new Promise(resolve => setTimeout(resolve, 500));
      return mockDestinations.find(dest => dest.id === id) || null;
    },
  
    async searchDestinations(query: string): Promise<Destination[]> {
      await new Promise(resolve => setTimeout(resolve, 600));
      return mockDestinations.filter(dest => 
        dest.name.toLowerCase().includes(query.toLowerCase()) ||
        dest.city.toLowerCase().includes(query.toLowerCase()) ||
        dest.country.toLowerCase().includes(query.toLowerCase())
      );
    }
  };