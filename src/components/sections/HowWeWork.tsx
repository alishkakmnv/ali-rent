"use client"

import { motion } from "framer-motion"
import { Phone, Search, FileSignature, Truck } from "lucide-react"
import { workSteps } from "@/data/advantages"

const iconMap: Record<string, React.ElementType> = {
  Phone,
  Search,
  FileSignature,
  Truck,
}

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-24 bg-[#F5F4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#FFC700] mb-3">
            Процесс
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] leading-tight">
            Как мы работаем
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-[#0A0A0A]/10 z-0" />

          {workSteps.map((step, i) => {
            const Icon = iconMap[step.icon] || Phone
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative z-10 px-4 lg:px-8 pb-10 lg:pb-0"
              >
                {/* Step number + icon */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-14 h-14 bg-[#0A0A0A] rounded-sm flex items-center justify-center shrink-0 shadow-lg">
                      <Icon size={22} className="text-[#FFC700]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#FFC700] rounded-full flex items-center justify-center">
                      <span className="text-[10px] font-black text-[#0A0A0A]">
                        {step.id}
                      </span>
                    </div>
                  </div>
                  {/* Mobile connector */}
                  {i < workSteps.length - 1 && (
                    <div className="flex-1 lg:hidden h-px bg-[#0A0A0A]/10" />
                  )}
                </div>

                <h3 className="font-bold text-[#0A0A0A] text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#0A0A0A]/55 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-[#0A0A0A] rounded-sm p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <div className="text-[#FFC700] font-black text-2xl mb-1">
              Техника на объекте за 2 часа
            </div>
            <div className="text-white/50 text-sm">
              Звоните — разберёмся и пришлём технику быстро
            </div>
          </div>
          <a
            href="tel:+77001234567"
            className="shrink-0 inline-flex items-center gap-2 bg-[#FFC700] hover:bg-[#FFD740] text-[#0A0A0A] font-bold px-6 py-3 rounded-sm transition-colors"
          >
            <Phone size={16} />
            +7 (700) 123-45-67
          </a>
        </motion.div>
      </div>
    </section>
  )
}
