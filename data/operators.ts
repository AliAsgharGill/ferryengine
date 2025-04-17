import { Operator, Country } from '@/types/operators';

export const countries: Country[] = [
  { code: 'GR', name: 'Greece', flag: '/images/flags/greece.png' },
  { code: 'IT', name: 'Italy', flag: '/images/flags/italy.png' },
];

export const operators: Operator[] = [
  {
    id: 'blue-star',
    name: "Blue Star Ferries",
    logo: "/images/blue-star-ferries.png",
    rating: 4.5,
    customerCount: 1342,
    operatesIn: [countries[0]], // Greece
    vesselCount: 8,
    ferryTypes: "8 normal",
    ferryCategory: "normal",
    description: "Blue Star Ferries is currently the biggest ferry company in Greece. It is a member of Attica Group, one of the most significant companies in the Greek shipping industry. Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc),Dodecanese (Rhodes, Kos etc). Blue Star Ferries reaches over 50 destinations in total.",
    popularVessels: ["Blue Star Delos", "Blue Star Naxos"]
  },
  {
    id: 'seajets',
    name: "Seajets",
    logo: "/images/seajets.png",
    rating: 4.2,
    customerCount: 2467,
    operatesIn: [countries[0]], // Greece
    vesselCount: 17,
    ferryTypes: "10 normal and 7 high-speed",
    ferryCategory: "both",
    description: "Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services. The company's passenger ferries have been connecting over 26 destinations in the Aegean Sea since 2002.",
    popularVessels: ["WorldChampion Jet", "Seajet 2"]
  },
  {
    id: 'anek-superfast',
    name: "Anek-Superfast",
    logo: "/images/anek-superfast.png",
    rating: 4.3,
    customerCount: 867,
    operatesIn: [countries[0], countries[1]], // Greece and Italy
    vesselCount: 5,
    ferryTypes: "Normal ferries",
    ferryCategory: "normal",
    description: "Anek-Superfast is a joint venture established in June 2011 as a result of the cooperation between two major Greek ferry companies: Anek Lines and Superfast Ferries. The goal was to provide fast and convenient service to the customers.",
    popularVessels: ["Superfast XI", "Superfast XII"]
  }
];