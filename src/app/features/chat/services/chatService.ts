import { CHAT_SEED, delay } from '@/app/mock/catalog';
import { isMock } from '@/app/helpers/isMock';
import type { ChatMessage } from '@/app/types/catalog.types';
import axiosInstance from '@/app/config/axiosConfig';
import { API_ENDPOINTS } from '@/app/api/endpoints';

let messages: ChatMessage[] = [...CHAT_SEED];

export async function fetchMessages(): Promise<ChatMessage[]> {
  if (isMock()) {
    await delay(80);
    return messages;
  }
  const { data } = await axiosInstance.get(API_ENDPOINTS.MESSAGES);
  return data.content;
}

export async function sendMessage(text: string): Promise<ChatMessage> {
  if (isMock()) {
    await delay(120);
    const mine: ChatMessage = {
      id: `me-${Date.now()}`,
      from: 'me',
      text,
      at: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
    };
    const reply: ChatMessage = {
      id: `them-${Date.now()}`,
      from: 'them',
      text: 'Perfecto, te confirmo el cupo en un momento.',
      at: new Date().toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' }),
    };
    messages = [...messages, mine, reply];
    return mine;
  }
  const { data } = await axiosInstance.post(API_ENDPOINTS.MESSAGES, { text });
  return data.content;
}
