'use client'

import { Phone, MessageCircle } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { buildPhoneLink, buildWhatsAppLink, PHONE_DISPLAY_PRIMARY } from '@/lib/utils'

export function CtaBanner() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section ref={ref} className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative overflow-hidden rounded-3xl p-10 sm:p-14 text-center"
          style={{
            background: 'linear-gradient(135deg, #111111 0%, #171717 50%, #111111 100%)',
            border: '1px solid #2A2A2A',
          }}
        >
          {/* Glow blob */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 40% at 50% 50%, var(--accent-glow) 0%, transparent 70%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10">
            <p className="text-sm font-medium uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>
              Готовы к работе
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Нужна техника уже сегодня?
            </h2>
            <p className="text-neutral-400 text-lg max-w-lg mx-auto mb-10">
              Звоните или пишите в WhatsApp — уточним наличие и согласуем время выезда.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={buildPhoneLink('+77071444348')}
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black font-semibold text-base transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto justify-center"
              >
                <Phone size={16} />
                {PHONE_DISPLAY_PRIMARY}
              </a>
              <a
                href={buildWhatsAppLink('Здравствуйте! Хочу узнать о возможности аренды погрузчика сегодня.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#171717] hover:bg-[#1F1F1F] border border-[#2A2A2A] hover:border-[#3A3A3A] text-white font-semibold text-base transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <MessageCircle size={16} className="text-[var(--accent)]" />
                Написать в WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
