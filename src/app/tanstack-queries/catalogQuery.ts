import { useQuery } from '@tanstack/react-query';
import {
  fetchBusinessById,
  fetchBusinesses,
  fetchCategories,
  fetchChipCategories,
  fetchInterest,
  fetchProductById,
  fetchProducts,
  fetchServiceById,
  fetchServices,
  searchCatalog,
} from '@/app/features/catalog/services/catalogService';
import type { Business, Category, CategorySlug, InterestCard } from '@/app/types/catalog.types';

export const CATEGORIES_KEY = ['categories'] as const;
export const CHIP_CATEGORIES_KEY = ['chip-categories'] as const;
export const BUSINESSES_KEY = ['businesses'] as const;
export const BUSINESS_KEY = ['business'] as const;
export const SERVICES_KEY = ['services'] as const;
export const SERVICE_KEY = ['service'] as const;
export const PRODUCTS_KEY = ['products'] as const;
export const PRODUCT_KEY = ['product'] as const;
export const INTEREST_KEY = ['interest'] as const;
export const SEARCH_KEY = ['search'] as const;

export function useCategoriesQuery(initialData?: Category[]) {
  return useQuery({ queryKey: CATEGORIES_KEY, queryFn: fetchCategories, initialData });
}

export function useChipCategoriesQuery(initialData?: Category[]) {
  return useQuery({ queryKey: CHIP_CATEGORIES_KEY, queryFn: fetchChipCategories, initialData });
}

export function useBusinessesQuery(category?: CategorySlug, initialData?: Business[]) {
  return useQuery({
    queryKey: [...BUSINESSES_KEY, category ?? 'todos'],
    queryFn: () => fetchBusinesses(category),
    initialData,
  });
}

export function useBusinessQuery(id: string) {
  return useQuery({
    queryKey: [...BUSINESS_KEY, id],
    queryFn: () => fetchBusinessById(id),
    enabled: Boolean(id),
  });
}

export function useServicesQuery(businessId: string) {
  return useQuery({
    queryKey: [...SERVICES_KEY, businessId],
    queryFn: () => fetchServices(businessId),
    enabled: Boolean(businessId),
  });
}

export function useServiceQuery(id: string) {
  return useQuery({
    queryKey: [...SERVICE_KEY, id],
    queryFn: () => fetchServiceById(id),
    enabled: Boolean(id),
  });
}

export function useProductsQuery(businessId?: string) {
  return useQuery({
    queryKey: [...PRODUCTS_KEY, businessId ?? 'all'],
    queryFn: () => fetchProducts(businessId),
  });
}

export function useProductQuery(id: string) {
  return useQuery({
    queryKey: [...PRODUCT_KEY, id],
    queryFn: () => fetchProductById(id),
    enabled: Boolean(id),
  });
}

export function useInterestQuery(initialData?: InterestCard[]) {
  return useQuery({ queryKey: INTEREST_KEY, queryFn: fetchInterest, initialData });
}

export function useSearchQuery(query: string) {
  return useQuery({
    queryKey: [...SEARCH_KEY, query],
    queryFn: () => searchCatalog(query),
  });
}
