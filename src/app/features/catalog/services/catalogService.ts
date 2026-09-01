import axiosInstance from '@/app/config/axiosConfig';
import { API_ENDPOINTS } from '@/app/api/endpoints';
import { isMock } from '@/app/helpers/isMock';
import {
  BUSINESSES,
  CATEGORIES,
  CHIP_CATEGORIES,
  delay,
  INTEREST,
  PRODUCTS,
  RATING_SUMMARY,
  REVIEWS,
  SERVICES,
} from '@/app/mock/catalog';
import type {
  Business,
  CatalogProduct,
  CatalogService,
  Category,
  CategorySlug,
  InterestCard,
  RatingBreakdown,
  Review,
} from '@/app/types/catalog.types';

export async function fetchCategories(): Promise<Category[]> {
  if (isMock()) {
    await delay();
    return CATEGORIES;
  }
  const { data } = await axiosInstance.get(API_ENDPOINTS.CATEGORIES);
  return data.content;
}

export async function fetchChipCategories(): Promise<Category[]> {
  if (isMock()) {
    await delay(80);
    return CHIP_CATEGORIES;
  }
  const { data } = await axiosInstance.get(API_ENDPOINTS.CATEGORIES, { params: { kind: 'chips' } });
  return data.content;
}

export async function fetchBusinesses(category?: CategorySlug): Promise<Business[]> {
  if (isMock()) {
    await delay();
    if (!category || category === 'todos') return BUSINESSES;
    if (category === 'comida') return BUSINESSES.filter((b) => b.category === 'comida');
    if (category === 'turismo') return BUSINESSES.filter((b) => b.category === 'turismo');
    if (category === 'belleza') return BUSINESSES.filter((b) => b.category === 'belleza');
    return BUSINESSES.filter((b) => b.category === category);
  }
  const { data } = await axiosInstance.get(API_ENDPOINTS.BUSINESSES, { params: { category } });
  return data.content;
}

export async function fetchBusinessById(id: string): Promise<Business | undefined> {
  if (isMock()) {
    await delay();
    return BUSINESSES.find((b) => b.id === id);
  }
  const { data } = await axiosInstance.get(`${API_ENDPOINTS.BUSINESS}/${id}`);
  return data.content;
}

export async function fetchServices(businessId: string): Promise<CatalogService[]> {
  if (isMock()) {
    await delay();
    return SERVICES.filter((s) => s.businessId === businessId);
  }
  const { data } = await axiosInstance.get(API_ENDPOINTS.SERVICES, { params: { businessId } });
  return data.content;
}

export async function fetchServiceById(id: string): Promise<CatalogService | undefined> {
  if (isMock()) {
    await delay();
    return SERVICES.find((s) => s.id === id);
  }
  const { data } = await axiosInstance.get(`${API_ENDPOINTS.SERVICE}/${id}`);
  return data.content;
}

export async function fetchProducts(businessId?: string): Promise<CatalogProduct[]> {
  if (isMock()) {
    await delay();
    return businessId ? PRODUCTS.filter((p) => p.businessId === businessId) : PRODUCTS;
  }
  const { data } = await axiosInstance.get(API_ENDPOINTS.PRODUCTS, { params: { businessId } });
  return data.content;
}

export async function fetchProductById(id: string): Promise<CatalogProduct | undefined> {
  if (isMock()) {
    await delay();
    return PRODUCTS.find((p) => p.id === id);
  }
  const { data } = await axiosInstance.get(`${API_ENDPOINTS.PRODUCT}/${id}`);
  return data.content;
}

export async function fetchReviews(targetId: string): Promise<Review[]> {
  if (isMock()) {
    await delay();
    const scoped = REVIEWS.filter((r) => r.targetId === targetId);
    return scoped.length ? scoped : REVIEWS.filter((r) => r.targetId === 'dieguinho');
  }
  const { data } = await axiosInstance.get(API_ENDPOINTS.REVIEWS, { params: { targetId } });
  return data.content;
}

export async function fetchRatingSummary(targetId: string): Promise<RatingBreakdown> {
  if (isMock()) {
    await delay(60);
    return RATING_SUMMARY;
  }
  const { data } = await axiosInstance.get(`${API_ENDPOINTS.REVIEWS}/summary`, { params: { targetId } });
  return data.content;
}

export async function fetchInterest(): Promise<InterestCard[]> {
  if (isMock()) {
    await delay(80);
    return INTEREST;
  }
  const { data } = await axiosInstance.get(`${API_ENDPOINTS.BUSINESSES}/interest`);
  return data.content;
}

export async function searchCatalog(query: string): Promise<Business[]> {
  if (isMock()) {
    await delay();
    const q = query.trim().toLowerCase();
    if (!q) return BUSINESSES;
    return BUSINESSES.filter(
      (b) =>
        b.name.toLowerCase().includes(q) ||
        b.tag.toLowerCase().includes(q) ||
        b.location.toLowerCase().includes(q)
    );
  }
  const { data } = await axiosInstance.get(API_ENDPOINTS.SEARCH, { params: { q: query } });
  return data.content;
}

export { BUSINESSES, SERVICES, PRODUCTS };
