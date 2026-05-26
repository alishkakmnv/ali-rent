'use client'

import Image from 'next/image'
import { Phone, Star, Truck, UserCheck, Clock } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import { buildPhoneLink, PHONE_DISPLAY_PRIMARY } from '@/lib/utils'

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1581092335397-9fa341108e1e?w=1920&q=85'

const EASE = [0.21, 0.47, 0.32, 0.98] as [number, number, number, number]

const badges = [
  { icon: Truck, label: 'Доставка включена' },
  { icon: UserCheck, label: 'Оператор в цене' },
  { icon: Clock, label: 'От 3 часов' },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: EASE },
  }),
}

export function Hero() {
  const scrollToFleet = () => {
    document.querySelector('#fleet')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Зелёный вилочный погрузчик Mitsubishi на складе"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay: left-heavy for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full">
        <div className="max-w-2xl">
          {/* Rating badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171717]/80 border border-[#2A2A2A] mb-6"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} className="fill-[var(--accent)] text-[var(--accent)]" />
              ))}
            </div>
            <span className="text-xs text-neutral-300 font-medium">5.0 на 2GIS · 7 отзывов</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-4"
          >
            Аренда погрузчиков
            <br />
            <span style={{ color: 'var(--accent)' }}>в Алматы</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl text-neutral-300 leading-relaxed mb-8 max-w-lg"
          >
            Доставка и оператор уже в стоимости.
            <br />
            Минималка от&nbsp;3 часов.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            custom={0.3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-3 mb-10"
          >
            <button
              onClick={scrollToFleet}
              className="px-6 py-3.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black font-semibold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[var(--accent-glow)]"
            >
              Забронировать технику
            </button>
            <a
              href={buildPhoneLink('+77071444348')}
              className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#171717] hover:bg-[#1F1F1F] border border-[#2A2A2A] hover:border-[#3A3A3A] text-white font-semibold text-base transition-all duration-200"
            >
              <Phone size={16} className="text-[var(--accent)]" />
              {PHONE_DISPLAY_PRIMARY}
            </a>
          </motion.div>

          {/* Feature badges */}
          <motion.div
            custom={0.4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2.5"
          >
            {badges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#171717]/70 border border-[#2A2A2A] backdrop-blur-sm"
              >
                <Icon size={14} style={{ color: 'var(--accent)' }} />
                <span className="text-sm text-neutral-300 font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5"
      >
        <span className="text-xs text-neutral-600 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent" />
      </motion.div>
    </section>
  )
}
