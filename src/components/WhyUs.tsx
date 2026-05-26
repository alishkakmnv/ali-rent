'use client'

import { Truck, Award, MapPin, ShieldCheck } from 'lucide-react'
import { AnimatedSection, StaggerContainer, staggerItem } from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'

const advantages = [
  {
    icon: Truck,
    title: 'Своя техника',
    description: 'Mitsubishi Grendia и Komatsu — собственный парк. Не работаем как посредники. Цена напрямую.',
  },
  {
    icon: Award,
    title: 'Опытные операторы',
    description: 'Водители-механики с многолетним стажем. Знают технику, работают аккуратно и быстро.',
  },
  {
    icon: MapPin,
    title: 'Работаем по всему городу',
    description: 'Выезд по всем районам Алматы и пригороду. Базируемся в Турксибском — быстрый выезд на восток.',
  },
  {
    icon: ShieldCheck,
    title: 'Прозрачные цены',
    description: 'Никаких скрытых платежей. Стоимость оговаривается заранее. Оплата после выполнения работы.',
  },
]

export function WhyUs() {
  return (
    <section className="py-20 lg:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            Почему клиенты выбирают нас
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Почему Ali Servis
          </h2>
        </AnimatedSection>

        {/* 2x2 grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {advantages.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              className="flex gap-5 p-6 rounded-2xl bg-[#171717] border border-[#2A2A2A] hover:border-[var(--accent-border)] transition-all duration-300 group"
            >
              {/* Icon box */}
              <div
                className="w-12 h-12 rounded-xl shrink-0 flex items-center justify-center"
                style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent-border)' }}
              >
                <Icon size={20} style={{ color: 'var(--accent)' }} />
              </div>

              <div>
                <h3 className="font-display font-semibold text-white text-base mb-1.5">{title}</h3>
                <p className="text-sm text-neutral-400 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
