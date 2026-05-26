import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const PHONE_PRIMARY = '+77071444348'
export const PHONE_SECONDARY = '+77021444348'
export const PHONE_DISPLAY_PRIMARY = '+7 707 144 43 48'
export const PHONE_DISPLAY_SECONDARY = '+7 702 144 43 48'
export const WHATSAPP_NUMBER = '77071444348'

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export function buildPhoneLink(phone: string): string {
  return `tel:${phone}`
}
