import { AxiosError } from 'axios';
import { sonnerResponse } from './sonnerResponse';

export const apiErrorToast = (error: unknown, fallback: string): void => {
  const backendMessage =
    error instanceof AxiosError ? error.response?.data?.message : undefined;
  const resolved =
    backendMessage ??
    (error instanceof Error ? error.message : undefined) ??
    fallback;
  const message = Array.isArray(resolved) ? resolved.join(', ') : resolved;
  sonnerResponse(message || fallback, 'error');
};
