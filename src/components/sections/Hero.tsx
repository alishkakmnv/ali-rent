"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Shield, FileCheck, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease },
})

const trustBadges = [
  { icon: Shield, label: "Страховка включена" },
  { icon: FileCheck, label: "Документы для бухгалтерии" },
  { icon: Clock, label: "Выезд за 2 часа" },
]

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen bg-[#0A0A0A] flex items-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#FFC700 1px, transparent 1px), linear-gradient(to right, #FFC700 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Yellow accent blur */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#FFC700]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-[#FFC700]/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Diagonal stripe decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none hidden lg:block">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #FFC700 0, #FFC700 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 relative z-10">
        <div className="max-w-4xl">
          {/* Pre-heading badge */}
          <motion.div {...fadeUp(0)} className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#FFC700] border border-[#FFC700]/30 bg-[#FFC700]/5 px-4 py-2 rounded-sm">
              <span className="w-1.5 h-1.5 bg-[#FFC700] rounded-full animate-pulse" />
              Павлодар · Астана · Алматы
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6"
          >
            Аренда
            <br />
            <span className="text-[#FFC700]">спецтехники</span>
            <br />
            в Казахстане
          </motion.h1>

          {/* Price line */}
          <motion.div {...fadeUp(0.2)} className="flex items-baseline gap-3 mb-4">
            <span className="text-2xl sm:text-3xl font-bold text-white">
              от{" "}
              <span className="text-[#FFC700]">25 000 ₸</span>
              <span className="text-white/60 text-lg font-normal"> / смена</span>
            </span>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.25)}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed"
          >
            Собственный парк — 60+ единиц. Экскаваторы, краны, самосвалы,
            бульдозеры и другая техника с машинистом. Выезд на объект за{" "}
            <span className="text-white/90 font-semibold">2 часа</span> по
            Павлодару, Астане и Алматы.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            {...fadeUp(0.35)}
            className="flex flex-col sm:flex-row gap-3 mb-12"
          >
            <Button
              onClick={() => scrollTo("#contacts")}
              size="lg"
              className="bg-[#FFC700] hover:bg-[#FFD740] text-[#0A0A0A] font-bold text-base px-8 h-14 rounded-sm group"
            >
              Получить коммерческое предложение
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
            <a href="tel:+77001234567">
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-base px-8 h-14 rounded-sm w-full sm:w-auto"
              >
                <Phone size={16} className="mr-2 text-[#FFC700]" />
                Позвонить сейчас
              </Button>
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            {...fadeUp(0.45)}
            className="flex flex-wrap gap-3"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-sm px-4 py-2.5"
              >
                <Icon size={14} className="text-[#FFC700] shrink-0" />
                <span className="text-sm text-white/80 font-medium">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-20 pt-10 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-8"
        >
          {[
            { value: "60+", label: "Единиц техники" },
            { value: "7 лет", label: "На рынке Казахстана" },
            { value: "340+", label: "Завершённых объектов" },
            { value: "24/7", label: "Работаем без выходных" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl sm:text-4xl font-black text-[#FFC700] leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
