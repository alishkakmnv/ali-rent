'use client'

import { HardHat, Package, Truck, Container, Boxes, Shovel } from 'lucide-react'
import { AnimatedSection, StaggerContainer, staggerItem } from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'

const cases = [
  {
    icon: HardHat,
    title: 'Строительные работы',
    description: 'Разгрузка стройматериалов, перемещение блоков и конструкций на стройплощадках.',
  },
  {
    icon: Package,
    title: 'Складская погрузка',
    description: 'Быстрая погрузка и разгрузка товаров на складах любого типа.',
  },
  {
    icon: Truck,
    title: 'Переезд производств',
    description: 'Перемещение тяжёлого оборудования при переезде склада или цеха.',
  },
  {
    icon: Container,
    title: 'Разгрузка контейнеров',
    description: 'Выгрузка фур и морских контейнеров в портах и терминалах.',
  },
  {
    icon: Boxes,
    title: 'Работа с паллетами',
    description: 'Штабелирование, перемещение и упорядочивание паллетных грузов.',
  },
  {
    icon: Shovel,
    title: 'Расчистка территорий',
    description: 'Уборка строительного мусора, расчистка и подготовка площадок.',
  },
]

export function UseCases() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            Где применяем
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Для каких работ подходит
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Погрузчики Mitsubishi и Komatsu справятся с большинством задач в городе и за его пределами.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cases.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={staggerItem}
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex gap-4 p-5 rounded-2xl bg-[#171717] border border-[#2A2A2A] hover:border-[var(--accent-border)] transition-all duration-300 group"
            >
              {/* Icon */}
              <div
                className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center mt-0.5 transition-all duration-300"
                style={{ background: 'var(--accent-glow)', border: '1px solid var(--accent-border)' }}
              >
                <Icon size={17} style={{ color: 'var(--accent)' }} />
              </div>

              <div>
                <h3 className="font-display font-semibold text-white mb-1 text-sm">{title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
