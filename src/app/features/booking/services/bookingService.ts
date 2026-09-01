import { delay } from '@/app/mock/catalog';
import { isMock } from '@/app/helpers/isMock';
import axiosInstance from '@/app/config/axiosConfig';
import { API_ENDPOINTS } from '@/app/api/endpoints';

export interface BookingPayload {
  serviceId: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export async function createBooking(payload: BookingPayload): Promise<{ id: string }> {
  if (isMock()) {
    await delay(400);
    return { id: `bk-${Date.now()}` };
  }
  const { data } = await axiosInstance.post(API_ENDPOINTS.BOOKINGS, payload);
  return data.content;
}

export async function checkAvailability(serviceId: string, date: string, time: string): Promise<boolean> {
  if (isMock()) {
    await delay(250);
    return Boolean(serviceId && date && time);
  }
  const { data } = await axiosInstance.get(API_ENDPOINTS.AVAILABILITY, {
    params: { serviceId, date, time },
  });
  return data.content;
}
