import { useQuery } from '@tanstack/react-query';
import { fetchMessages } from '@/app/features/chat/services/chatService';

export const MESSAGES_KEY = ['messages'] as const;

export function useMessagesQuery() {
  return useQuery({ queryKey: MESSAGES_KEY, queryFn: fetchMessages });
}
