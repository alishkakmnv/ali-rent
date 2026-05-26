'use client'

import { Star, Quote } from 'lucide-react'
import { AnimatedSection, StaggerContainer, staggerItem } from '@/components/ui/AnimatedSection'
import { motion } from 'framer-motion'

const reviews = [
  {
    id: 1,
    author: 'Анонимный Парень',
    avatar: 'А',
    rating: 5,
    text: 'Мастер добрых дел. Надёжный партнёр.',
    date: 'Сентябрь 2024',
  },
  {
    id: 2,
    author: 'Борис Иванов',
    avatar: 'Б',
    rating: 5,
    text: 'Хороший сервис.',
    date: 'Август 2024',
  },
  {
    id: 3,
    author: 'Vugar Mirkusenov',
    avatar: 'V',
    rating: 5,
    text: 'Хороший сервис. С хорошими ценами. Спасибо, быстро и качественно делают.',
    date: 'Апрель 2024',
  },
  {
    id: 4,
    author: 'Muslim Mamedov',
    avatar: 'M',
    rating: 5,
    text: 'Исмаил чёткий пацан 👍',
    date: 'Апрель 2024',
  },
  {
    id: 5,
    author: 'Темперамент Улиц',
    avatar: 'Т',
    rating: 5,
    text: 'Сколько сервисов объездил, но таких профессиональных мастеров не видел. Цены и качество выполненных работ соответствует действительности. Рекомендую!',
    date: 'Апрель 2024',
  },
]

export function Reviews() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-medium uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
            Отзывы клиентов
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Что говорят о нас
          </h2>

          {/* Rating summary */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#171717] border border-[#2A2A2A] mt-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-[var(--accent)] text-[var(--accent)]" />
              ))}
            </div>
            <span className="text-sm font-semibold text-white">5.0</span>
            <div className="w-px h-4 bg-[#3A3A3A]" />
            <a
              href="https://2gis.kz/almaty/firm/70000001083910413"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-[var(--accent)] transition-colors"
            >
              12 оценок на 2GIS
            </a>
          </div>
        </AnimatedSection>

        {/* Review cards */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

function ReviewCard({ review }: { review: typeof reviews[number] }) {
  return (
    <motion.div
      variants={staggerItem}
      className="flex flex-col p-6 rounded-2xl bg-[#171717] border border-[#2A2A2A] hover:border-[var(--accent-border)] transition-all duration-300"
    >
      {/* Quote icon */}
      <Quote size={24} className="mb-4 opacity-30" style={{ color: 'var(--accent)' }} />

      {/* Text */}
      <p className="text-neutral-300 text-sm leading-relaxed flex-1 mb-5 italic">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={12} className="fill-[var(--accent)] text-[var(--accent)]" />
        ))}
      </div>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-black shrink-0"
          style={{ background: 'var(--accent)' }}
        >
          {review.avatar}
        </div>
        <div>
          <p className="text-sm font-medium text-white">{review.author}</p>
          <p className="text-xs text-neutral-600">{review.date} · 2GIS</p>
        </div>
      </div>
    </motion.div>
  )
}
