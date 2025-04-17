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
    description: "Blue Star Ferries is currently the biggest ferry company in Greece. It is a member of Attica Group, one of the most significant companies in the Greek shipping industry. Its fleet consists of vessels of the latest technology and serves itineraries starting from the port of Piraeus and heading to the islands of Cyclades (Mykonos, Santorini, Paros etc)Dodecanese (Rhodes, Kos etc). Blue Star Ferries reaches over 50 destinations in total. Even though Blue Star ...Adriatic and Ionian Sea between Greece and Italy. Later on, from 1980 until 2000 the company developed rapidly and started bringing into action ferries both in Greece and abroad.",
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
    description: "Seajets is the biggest company of high-speed vessels of the Aegean Sea. It is a joint venture of speedboats that was initially founded in 1989 to provide shipping services. The company's passenger ferries have been connecting over 26 destinations in the Aegean Sea since 2002. Their fleet consists of 14 high-speed catamarans and 3 conventional ones, with a speed of up to 50 knots.Seajets connect the main ports of Athens (Piraeus, Rafina and Lavrion), other parts of the mainland (Thessaloniki, Kavala, Peloponnese) and ...Crete (Rethymno and Heraklion) to the islands of the Cyclades (Mykonos, Santorini, Paros, Naxos and more), the Sporades and the Northern Aegean Islands. The timetables are renewed every year before the tourist season and the connections are available on a daily basis.",
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
    description: "Anek-Superfast is a joint venture established in June 2011 as a result of the cooperation between two major Greek ferry companies, Anek Lines and Superfast Ferries. he goal was to provide fast and convenient service to the customers, as both companies had vessels of the latest technology.The ferry lines available by the companies connect not only Athens to Crete (Piraeus to Heraklion and Chania) but also makes the route from Italy to Greece (from Ancona, Bari and Venice to Patra, Corfu and ...Igoumenitsa).Anek-Superfast uses 6 ferries of various sizes in total that can carry from 900 to 2200 passengers, depending on the vessel. Their speed also varies, from 21 to 31 knots. All of them have garages for cars and motorbikes, with the capacity to carry from 170 to 900 vehicles per vessel.The ferries offer many facilities, from restaurants and cafe-bars to shops and play areas for children. Some of them also provide additional entertainment facilities. Moreover, various types of cabins and seats are available, as well as special cabins and kennels for pets.",
    popularVessels: ["Superfast XI", "Superfast XII"]
  }
];