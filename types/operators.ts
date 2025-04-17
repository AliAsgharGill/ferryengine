export interface Operator {
  id: string;
  name: string;
  logo: string;
  rating: number;
  customerCount: number;
  operatesIn: Country[];
  vesselCount: number;
  ferryTypes: string;
  ferryCategory: 'normal' | 'high-speed' | 'both';
  description: string;
  popularVessels: string[];
}

export interface Country {
  code: string;
  name: string;
  flag: string;
}

export interface FilterState {
  searchTerm: string;
  selectedCountry: string;
  ferryType: 'all' | 'normal' | 'high-speed';
  sortBy: 'rating' | 'name' | 'customerCount';
  sortOrder: 'asc' | 'desc';
}