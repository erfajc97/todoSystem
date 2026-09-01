export type CategorySlug =
  | 'todos'
  | 'comida'
  | 'turismo'
  | 'belleza'
  | 'salud'
  | 'educacion'
  | 'restaurante'
  | 'negocios'
  | 'cultura'
  | 'peluqueria'
  | 'barberia'
  | 'tecnologia'
  | 'carros'
  | 'deportes'
  | 'fitness';

export interface Category {
  id: string;
  slug: CategorySlug;
  labelKey: string;
  image: string;
  icon: 'home' | 'bowl' | 'camera' | 'sparkle' | 'heart' | 'book' | 'briefcase' | 'palette' | 'scissors';
}

export interface Business {
  id: string;
  slug: string;
  name: string;
  tag: string;
  verified: boolean;
  rating: number;
  reviewCount: number;
  priceFrom: number;
  category: CategorySlug;
  images: string[];
  description: string;
  isOpen: boolean;
  hours: string;
  location: string;
  phone: string;
  badge?: 'new' | 'top';
}

export interface CatalogService {
  id: string;
  businessId: string;
  name: string;
  description: string;
  price: number;
  image: string;
  durationMin: number;
}

export interface CatalogProduct {
  id: string;
  businessId: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Review {
  id: string;
  targetId: string;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface RatingBreakdown {
  average: number;
  total: number;
  label: 'excellent';
  bars: { stars: number; pct: number }[];
}

export interface ChatMessage {
  id: string;
  from: 'me' | 'them';
  text: string;
  at: string;
}

export interface InterestCard {
  id: string;
  titleKey: string;
  image: string;
  href: string;
}

export interface HomeCategoryTile {
  id: string;
  slug: CategorySlug;
  labelKey: string;
  emoji: string;
}
