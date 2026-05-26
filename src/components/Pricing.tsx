'use client'

import { Clock, TrendingUp, CalendarDays, Phone } from 'lucide-react'
import { AnimatedSection, StaggerContainer, staggerItem } from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'
import { buildPhoneLink, PHONE_DISPLAY_PRIMARY } from '@/lib/utils'

const steps = [
  {
    icon: Clock,
    step: '01',
    title: 'Минимальный заказ — 3 часа',
    description:
      'Цены на странице — за 3 рабочих часа. В стоимость уже входит доставка техники по городу и работа опытного оператора.',
  },
  {
    icon: TrendingUp,
    step: '02',
    title: 'После 3 часов — почасовая оплата',
    description:
      'Если работы больше — тариф продолжается поминутно / почасово. Ставка зависит от типа техники. Уточняйте при бронировании.',
  },
  {
    icon: CalendarDays,
    step: '03',
    title: 'Работа на весь день — по договорённости',
    description:
      'Если нужна техника на полный рабочий день — считаем индивидуально. Например, 1.5-тонник на весь день от 90 000 ₸.',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            Как считается стоимость
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Прозрачные цены
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Никаких скрытых платежей. Итог оговаривается перед работой.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {steps.map(({ icon: Icon, step, title, description }) => (
            <motion.div
              key={step}
              variants={staggerItem}
              className="relative p-6 rounded-2xl bg-[#171717] border border-[#2A2A2A] overflow-hidden group hover:border-[var(--accent-border)] transition-all duration-300"
            >
              {/* Step number watermark */}
              <div className="absolute top-4 right-5 font-display text-6xl font-bold text-[#1F1F1F] select-none pointer-events-none leading-none">
                {step}
              </div>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 relative z-10"
                style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent-border)' }}
              >
                <Icon size={18} style={{ color: 'var(--accent)' }} />
              </div>

              <h3 className="font-display text-base font-semibold text-white mb-2 relative z-10">{title}</h3>
              <p className="text-sm text-neutral-400 leading-relaxed relative z-10">{description}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Note */}
        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 rounded-2xl bg-[#171717] border border-[#2A2A2A]">
            <p className="text-sm text-neutral-400 text-center sm:text-left">
              Точную стоимость на ваш объём работ — уточняйте по телефону
            </p>
            <a
              href={buildPhoneLink('+77071444348')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black font-semibold text-sm whitespace-nowrap transition-all duration-200 hover:scale-[1.02]"
            >
              <Phone size={14} />
              {PHONE_DISPLAY_PRIMARY}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
