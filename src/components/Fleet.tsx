'use client'

import Image from 'next/image'
import { Check, MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { buildWhatsAppLink } from '@/lib/utils'
import { StaggerContainer, staggerItem } from '@/components/ui/AnimatedSection'
import { AnimatedSection } from '@/components/ui/AnimatedSection'

const fleet = [
  {
    id: 'mitsubishi-15',
    brand: 'Mitsubishi Grendia',
    name: 'Погрузчик 1.5 тонны',
    price: '65 000 ₸',
    priceNote: 'за 3 часа · минимальный заказ',
    image: '/images/fleet/mitsubishi-garage.jpg',
    imageAlt: 'Зелёный вилочный погрузчик Mitsubishi Grendia в гараже',
    features: ['Доставка по Алматы', 'Опытный оператор', 'Топливо'],
    whatsappText: 'Здравствуйте! Хочу арендовать погрузчик 1.5 тонн. Подскажите наличие на ближайшие дни.',
    accent: true,
  },
  {
    id: 'mitsubishi-25',
    brand: 'Mitsubishi Grendia',
    name: 'Погрузчик 2.5 тонны',
    price: '75 000 ₸',
    priceNote: 'за 3 часа · минимальный заказ',
    image: '/images/fleet/mitsubishi-container.jpg',
    imageAlt: 'Зелёный погрузчик Mitsubishi Grendia заезжает в контейнер',
    features: ['Доставка по Алматы', 'Опытный оператор', 'Топливо'],
    whatsappText: 'Здравствуйте! Хочу арендовать погрузчик 2.5 тонн. Подскажите наличие на ближайшие дни.',
    accent: false,
  },
  {
    id: 'komatsu-3',
    brand: 'Komatsu',
    name: 'Погрузчик 3 тонны',
    price: '85 000 ₸',
    priceNote: 'за 3 часа · минимальный заказ',
    image: '/images/fleet/komatsu-pair.jpg',
    imageAlt: 'Два жёлтых погрузчика Komatsu 3 тонны в боксе',
    features: ['Доставка по Алматы', 'Опытный оператор', 'Топливо'],
    whatsappText: 'Здравствуйте! Хочу арендовать погрузчик 3 тонны. Подскажите наличие на ближайшие дни.',
    accent: false,
  },
]

export function Fleet() {
  return (
    <section id="fleet" className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            Наш автопарк
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Техника в наличии
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Собственный парк Mitsubishi и Komatsu. Без посредников — цена напрямую от владельца.
          </p>
        </AnimatedSection>

        {/* Cards grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleet.map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

function FleetCard({ vehicle }: { vehicle: typeof fleet[number] }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="group relative flex flex-col rounded-2xl bg-[#171717] border border-[#2A2A2A] overflow-hidden hover:border-[var(--accent-border)] transition-all duration-300 hover:shadow-[0_0_32px_var(--accent-glow)]"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-[#1F1F1F]">
        <Image
          src={vehicle.image}
          alt={vehicle.imageAlt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />
        {/* Brand badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-[#0A0A0A]/80 text-neutral-300 border border-[#3A3A3A] backdrop-blur-sm">
            {vehicle.brand}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-lg font-semibold text-white mb-3">
          {vehicle.name}
        </h3>

        {/* Price */}
        <div className="mb-4">
          <span className="font-display text-2xl font-bold" style={{ color: 'var(--accent)' }}>
            {vehicle.price}
          </span>
          <p className="text-xs text-neutral-500 mt-0.5">{vehicle.priceNote}</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#2A2A2A] mb-4" />

        {/* Features */}
        <ul className="space-y-2 mb-5 flex-1">
          {vehicle.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2.5 text-sm text-neutral-300">
              <Check size={14} style={{ color: 'var(--accent)' }} className="shrink-0" />
              {feat}
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <a
          href={buildWhatsAppLink(vehicle.whatsappText)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black font-semibold text-sm transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
        >
          <MessageCircle size={15} />
          Забронировать
        </a>
      </div>
    </motion.div>
  )
}
