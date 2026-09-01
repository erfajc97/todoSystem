import { IMG } from './images';
import type {
  Business,
  CatalogProduct,
  CatalogService,
  Category,
  ChatMessage,
  HomeCategoryTile,
  InterestCard,
  RatingBreakdown,
  Review,
} from '@/app/types/catalog.types';

export const CATEGORIES: Category[] = [
  { id: 'cat-salud', slug: 'salud', labelKey: 'categories.salud', image: IMG.salud, icon: 'heart' },
  { id: 'cat-edu', slug: 'educacion', labelKey: 'categories.educacion', image: IMG.educacion, icon: 'book' },
  { id: 'cat-tur', slug: 'turismo', labelKey: 'categories.turismo', image: IMG.turismo, icon: 'camera' },
  { id: 'cat-rest', slug: 'restaurante', labelKey: 'categories.restaurante', image: IMG.restaurante, icon: 'bowl' },
  { id: 'cat-neg', slug: 'negocios', labelKey: 'categories.negocios', image: IMG.negocios, icon: 'briefcase' },
  { id: 'cat-cul', slug: 'cultura', labelKey: 'categories.cultura', image: IMG.cultura, icon: 'palette' },
];

export const CHIP_CATEGORIES: Category[] = [
  { id: 'chip-all', slug: 'todos', labelKey: 'chips.all', image: '', icon: 'home' },
  { id: 'chip-food', slug: 'comida', labelKey: 'chips.food', image: '', icon: 'bowl' },
  { id: 'chip-tur', slug: 'turismo', labelKey: 'chips.tourism', image: '', icon: 'camera' },
  { id: 'chip-beauty', slug: 'belleza', labelKey: 'chips.beauty', image: '', icon: 'sparkle' },
];

export const HOME_TILES: HomeCategoryTile[] = [
  { id: 'tile-belleza', slug: 'belleza', labelKey: 'categories.belleza', emoji: '💄' },
  { id: 'tile-comida', slug: 'comida', labelKey: 'categories.comida', emoji: '🌯' },
  { id: 'tile-tech', slug: 'tecnologia', labelKey: 'categories.tecnologia', emoji: '📱' },
  { id: 'tile-carros', slug: 'carros', labelKey: 'categories.carros', emoji: '🚗' },
  { id: 'tile-deportes', slug: 'deportes', labelKey: 'categories.deportes', emoji: '🏈' },
  { id: 'tile-turismo', slug: 'turismo', labelKey: 'categories.turismo', emoji: '✈️' },
];

export const BUSINESSES: Business[] = [
  {
    id: 'dieguinho',
    slug: 'dieguinho-barberia',
    name: 'Dieguinho Barbería',
    tag: 'Estética',
    verified: true,
    rating: 4.8,
    reviewCount: 1652,
    priceFrom: 13.99,
    category: 'belleza',
    images: [IMG.barberHero, IMG.barberCut, IMG.barberShop],
    description:
      'Barbería de autor en Envigado. Cortes clásicos, fades precisos y ritual de afeitado con toalla caliente. Ambiente íntimo, sillas vintage y playlist de vinilo.',
    isOpen: true,
    hours: '8:00 AM — 6:00 PM',
    location: 'Envigado — Antioquia',
    phone: '+57 300 555 1842',
    badge: 'top',
  },
  {
    id: 'figaro',
    slug: 'figaro-barberia',
    name: 'Fígaro Barbería',
    tag: 'Barbería',
    verified: true,
    rating: 4.8,
    reviewCount: 1652,
    priceFrom: 13.99,
    category: 'belleza',
    images: [IMG.barberShop, IMG.barberFade],
    description: 'Cortes contemporáneos y barba a navaja. Cabinas privadas y café de especialidad.',
    isOpen: true,
    hours: '9:00 AM — 8:00 PM',
    location: 'Medellín — El Poblado',
    phone: '+57 301 222 9011',
    badge: 'new',
  },
  {
    id: 'belen',
    slug: 'peluqueria-belen',
    name: 'Peluquería Belén',
    tag: 'Peluquería',
    verified: true,
    rating: 4.9,
    reviewCount: 880,
    priceFrom: 12.0,
    category: 'belleza',
    images: [IMG.salon, IMG.barberCut],
    description: 'Color, corte y cuidado capilar con productos veganos. Citas con diagnóstico incluido.',
    isOpen: true,
    hours: '10:00 AM — 7:00 PM',
    location: 'Medellín — Belén',
    phone: '+57 304 118 4400',
    badge: 'new',
  },
  {
    id: 'napoles',
    slug: 'pizzeria-napoles',
    name: 'Pizzería Nápoles',
    tag: 'Restaurante',
    verified: true,
    rating: 4.7,
    reviewCount: 934,
    priceFrom: 8.5,
    category: 'comida',
    images: [IMG.pizza, IMG.restaurante],
    description: 'Horno de leña, masa de 48 horas y mozzarella de búfala. Terraza con vista al valle.',
    isOpen: true,
    hours: '12:00 PM — 11:00 PM',
    location: 'Envigado — La Sebastiana',
    phone: '+57 310 700 2211',
  },
  {
    id: 'atlas',
    slug: 'gimnasio-atlas',
    name: 'Gimnasio Atlas',
    tag: 'Salud',
    verified: false,
    rating: 4.6,
    reviewCount: 210,
    priceFrom: 19.0,
    category: 'salud',
    images: [IMG.gym],
    description: 'Fuerza, movilidad y coaching 1:1. Clases al amanecer y sauna finlandesa.',
    isOpen: true,
    hours: '5:00 AM — 10:00 PM',
    location: 'Sabaneta',
    phone: '+57 315 009 3344',
  },
  {
    id: 'diego',
    slug: 'diego-salchipapa',
    name: 'Diego Salchipapa',
    tag: 'Restaurante',
    verified: true,
    rating: 4.8,
    reviewCount: 1652,
    priceFrom: 13.99,
    category: 'comida',
    images: [IMG.salchipapa, IMG.dining],
    description: 'Salchipapas, perros y combos de barrio con salsas de la casa. Terraza y entrega rápida.',
    isOpen: true,
    hours: '11:00 AM — 11:00 PM',
    location: 'Envigado — Antioquia',
    phone: '+57 312 440 7788',
  },
];

export const SERVICES: CatalogService[] = [
  {
    id: 'svc-corte',
    businessId: 'dieguinho',
    name: 'Corte de cabello',
    description: 'Corte clásico o contemporáneo con lavado, peinado y asesoría de estilo.',
    price: 10,
    image: IMG.barberCut,
    durationMin: 40,
  },
  {
    id: 'svc-basico',
    businessId: 'dieguinho',
    name: 'Corte de cabello básico',
    description: 'Corte de mantenimiento, contornos y acabado con navaja. Ideal para visitas frecuentes.',
    price: 12.99,
    image: IMG.barberHero,
    durationMin: 30,
  },
  {
    id: 'svc-fade',
    businessId: 'dieguinho',
    name: 'Desvanecido',
    description: 'Fade skin-to-skin con detalle en coronilla y texturizado.',
    price: 15,
    image: IMG.barberFade,
    durationMin: 50,
  },
  {
    id: 'svc-pelo',
    businessId: 'figaro',
    name: 'Corte de pelo',
    description: 'Corte con tijera y máquina, incluye masaje capilar.',
    price: 14,
    image: IMG.barberShop,
    durationMin: 45,
  },
  {
    id: 'svc-depilado',
    businessId: 'figaro',
    name: 'Depilado',
    description: 'Diseño de cejas y nariz con cera tibia.',
    price: 8,
    image: IMG.salon,
    durationMin: 20,
  },
];

export const PRODUCTS: CatalogProduct[] = [
  {
    id: 'prd-shampoo',
    businessId: 'dieguinho',
    name: 'Shampoo anticaída',
    description: 'Fórmula con cafeína y extracto de romero. 250 ml.',
    price: 18,
    image: IMG.shampoo,
  },
  {
    id: 'prd-oil',
    businessId: 'dieguinho',
    name: 'Aceite para barba',
    description: 'Mezcla de argán y cedro. Suaviza y da brillo.',
    price: 16,
    image: IMG.oil,
  },
  {
    id: 'prd-cream',
    businessId: 'dieguinho',
    name: 'Bálsamo after shave',
    description: 'Calma la piel después del afeitado en caliente.',
    price: 14,
    image: IMG.cream,
  },
  {
    id: 'prd-paste',
    businessId: 'dieguinho',
    name: 'Pasta dental herbal',
    description: 'Menta andina y xylitol. Sin flúor sintético.',
    price: 9.5,
    image: IMG.paste,
  },
  {
    id: 'prd-shoes',
    businessId: 'atlas',
    name: 'Adidas Ultraboost',
    description: 'Running diario, entresuela Boost y upper Primeknit.',
    price: 143,
    image: IMG.shoes,
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'rv-1',
    targetId: 'dieguinho',
    author: 'Hugo M.',
    avatar: IMG.avatar1,
    rating: 5,
    comment: 'El fade quedó impecable. Ambiente de revista y café de verdad.',
  },
  {
    id: 'rv-2',
    targetId: 'dieguinho',
    author: 'Camila R.',
    avatar: IMG.avatar2,
    rating: 5,
    comment: 'Puntuales, detallistas y el shampoo que venden es otro nivel.',
  },
  {
    id: 'rv-3',
    targetId: 'dieguinho',
    author: 'Andrés P.',
    avatar: IMG.avatar3,
    rating: 4,
    comment: 'Muy buen corte. Volvería solo por el ritual de toalla caliente.',
  },
  {
    id: 'rv-4',
    targetId: 'svc-basico',
    author: 'Laura G.',
    avatar: IMG.avatar4,
    rating: 5,
    comment: 'Rápido, limpio y el precio es justo. Agenda fácil.',
  },
  {
    id: 'rv-5',
    targetId: 'svc-basico',
    author: 'Diego S.',
    avatar: IMG.avatar1,
    rating: 5,
    comment: 'Me entendieron el estilo a la primera. 10/10.',
  },
  {
    id: 'rv-6',
    targetId: 'figaro',
    author: 'Martín L.',
    avatar: IMG.avatar3,
    rating: 5,
    comment: 'Cabinas privadas, cero prisa. El mejor desvanecido del Poblado.',
  },
];

export const RATING_SUMMARY: RatingBreakdown = {
  average: 4.8,
  total: 57,
  label: 'excellent',
  bars: [
    { stars: 5, pct: 78 },
    { stars: 4, pct: 14 },
    { stars: 3, pct: 5 },
    { stars: 2, pct: 2 },
    { stars: 1, pct: 1 },
  ],
};

export const INTEREST: InterestCard[] = [
  { id: 'int-rest', titleKey: 'home.restaurants', image: IMG.pizza, href: '/buscar?q=Restaurantes' },
  { id: 'int-fit', titleKey: 'home.fitness', image: IMG.fitness, href: '/buscar?q=Fitness' },
];

export const HOME_FEATURED = [
  ...BUSINESSES.filter((b) => b.id === 'figaro' || b.id === 'diego'),
  ...BUSINESSES.filter((b) => b.id !== 'figaro' && b.id !== 'diego'),
];

export const CHAT_SEED: ChatMessage[] = [
  {
    id: 'm1',
    from: 'them',
    text: 'Hola, ¿en qué te puedo ayudar hoy?',
    at: '10:12',
  },
  {
    id: 'm2',
    from: 'me',
    text: 'Quiero agendar un corte para el jueves en la tarde.',
    at: '10:13',
  },
  {
    id: 'm3',
    from: 'them',
    text: 'Tenemos 3:00 PM y 4:30 PM con Diego. ¿Cuál te queda mejor?',
    at: '10:14',
  },
];

export function delay(ms = 180): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
