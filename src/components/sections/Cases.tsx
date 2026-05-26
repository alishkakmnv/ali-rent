"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, MapPin, Clock, Wrench } from "lucide-react"
import { cases } from "@/data/cases"

export default function Cases() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? cases.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === cases.length - 1 ? 0 : c + 1))

  const typeColors: Record<string, string> = {
    "Жилое строительство": "bg-blue-500/20 text-blue-300",
    "Дорожные работы": "bg-orange-500/20 text-orange-300",
    "Промышленный объект": "bg-purple-500/20 text-purple-300",
    "Складская логистика": "bg-green-500/20 text-green-300",
    "Энергетика": "bg-yellow-500/20 text-yellow-300",
  }

  return (
    <section id="cases" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#FFC700] mb-3">
              Наши объекты
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
              Кейсы
            </h2>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center gap-3">
            <span className="text-white/30 text-sm">
              {current + 1} / {cases.length}
            </span>
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/15 hover:border-[#FFC700]/50 rounded-sm flex items-center justify-center text-white/60 hover:text-[#FFC700] transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-white/15 hover:border-[#FFC700]/50 rounded-sm flex items-center justify-center text-white/60 hover:text-[#FFC700] transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Image placeholder */}
            <div className="h-72 lg:h-full min-h-[320px] bg-white/5 border border-white/10 rounded-sm overflow-hidden relative">
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(-45deg, #FFC700 0, #FFC700 1px, transparent 0, transparent 50%)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-7xl mb-4 opacity-20">🏗️</div>
                <span className="text-xs text-white/20 uppercase tracking-widest">
                  фото объекта
                </span>
              </div>
              {/* Type badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`text-xs font-semibold px-3 py-1.5 rounded-sm ${typeColors[cases[current].type] || "bg-white/10 text-white/60"}`}
                >
                  {cases[current].type}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
                {cases[current].title}
              </h3>

              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <MapPin size={14} className="text-[#FFC700]" />
                  {cases[current].location}
                </div>
                <div className="flex items-center gap-2 text-sm text-white/50">
                  <Clock size={14} className="text-[#FFC700]" />
                  {cases[current].duration}
                </div>
              </div>

              <div className="flex items-start gap-2 mb-6 bg-white/5 border border-white/10 rounded-sm px-4 py-3">
                <Wrench size={14} className="text-[#FFC700] mt-0.5 shrink-0" />
                <span className="text-sm text-white/60">
                  {cases[current].equipment}
                </span>
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {cases[current].description}
              </p>

              <div className="border-t border-white/10 pt-5">
                <div className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">
                  Результат
                </div>
                <div className="text-base font-bold text-[#FFC700]">
                  {cases[current].result}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-2 bg-[#FFC700]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
