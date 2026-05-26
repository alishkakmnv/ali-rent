'use client'

import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import {
  PHONE_DISPLAY_PRIMARY,
  PHONE_DISPLAY_SECONDARY,
  buildPhoneLink,
  buildWhatsAppLink,
} from '@/lib/utils'

const MAP_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.4786!2d76.9673950!3d43.3481340!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDIwJzUzLjMiTiA3NsKwNTgnMDIuNiJF!5e0!3m2!1sru!2skz!4v1620000000000!5m2!1sru!2skz'

export function Contacts() {
  return (
    <section id="contacts" className="py-20 lg:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            Связаться с нами
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Контакты
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column — contact info */}
          <AnimatedSection delay={0.1} className="flex flex-col gap-6">
            {/* Phone cards */}
            <div className="p-6 rounded-2xl bg-[#171717] border border-[#2A2A2A] space-y-4">
              <h3 className="font-display font-semibold text-white text-sm uppercase tracking-wider text-neutral-500 mb-4">
                Телефоны
              </h3>

              {/* Primary phone */}
              <a
                href={buildPhoneLink('+77071444348')}
                className="flex items-center gap-4 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent-border)' }}
                >
                  <Phone size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p className="font-display text-2xl font-bold text-white group-hover:text-[var(--accent)] transition-colors">
                    {PHONE_DISPLAY_PRIMARY}
                  </p>
                  <p className="text-xs text-neutral-500">Основной</p>
                </div>
              </a>

              {/* Secondary phone */}
              <a
                href={buildPhoneLink('+77021444348')}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-[#1F1F1F] border border-[#2A2A2A]">
                  <Phone size={16} className="text-neutral-500" />
                </div>
                <div>
                  <p className="font-display text-xl font-semibold text-neutral-300 group-hover:text-white transition-colors">
                    {PHONE_DISPLAY_SECONDARY}
                  </p>
                  <p className="text-xs text-neutral-600">Дополнительный</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={buildWhatsAppLink('Здравствуйте! Хочу узнать о возможности аренды погрузчика.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 mt-2 rounded-xl bg-[#16A34A]/10 border border-[#16A34A]/30 text-[#4ADE80] hover:bg-[#16A34A]/20 transition-all duration-200 font-semibold text-sm"
              >
                <MessageCircle size={16} />
                Написать в WhatsApp
              </a>
            </div>

            {/* Address + hours */}
            <div className="p-6 rounded-2xl bg-[#171717] border border-[#2A2A2A] space-y-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent-border)' }}
                >
                  <MapPin size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-400 mb-0.5">Адрес</p>
                  <p className="text-white font-medium">
                    Алматы, ул. Бекмаханова, 90
                  </p>
                  <p className="text-sm text-neutral-500">Турксибский район</p>
                </div>
              </div>

              <div className="h-px bg-[#2A2A2A]" />

              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent-border)' }}
                >
                  <Clock size={16} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-400 mb-0.5">Режим работы</p>
                  <p className="text-white font-medium">Ежедневно 09:00–18:00</p>
                  <p className="text-sm text-neutral-500">по предварительному звонку</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Right column — map */}
          <AnimatedSection delay={0.2} className="rounded-2xl overflow-hidden border border-[#2A2A2A] min-h-[380px] lg:min-h-0 bg-[#171717]">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '380px', filter: 'invert(0.9) hue-rotate(180deg) saturate(0.5) brightness(0.85)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ali Servis на карте — ул. Бекмаханова 90, Турксибский район, Алматы"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
