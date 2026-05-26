"use client"

import { motion } from "framer-motion"
import {
  Warehouse,
  HardHat,
  Shield,
  FileText,
  Clock,
  MapPin,
} from "lucide-react"
import { advantages } from "@/data/advantages"

const iconMap: Record<string, React.ElementType> = {
  Warehouse,
  HardHat,
  Shield,
  FileText,
  Clock,
  MapPin,
}

export default function Advantages() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#FFC700] mb-4">
              Почему мы
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] leading-tight mb-6">
              Преимущества
              <br />
              <span className="text-[#0A0A0A]/30">которые важны</span>
            </h2>
            <p className="text-[#0A0A0A]/55 text-lg leading-relaxed mb-10">
              Мы работаем с юридическими лицами, ИП и подрядными организациями.
              Прозрачные условия, полная документация, надёжная техника.
            </p>

            {/* Large accent stat */}
            <div className="border-l-4 border-[#FFC700] pl-6">
              <div className="text-5xl font-black text-[#0A0A0A] mb-1">
                97%
              </div>
              <div className="text-[#0A0A0A]/55">
                клиентов возвращаются
                <br />
                к нам снова
              </div>
            </div>
          </motion.div>

          {/* Right: grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {advantages.map((adv, i) => {
              const Icon = iconMap[adv.icon] || Shield
              return (
                <motion.div
                  key={adv.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group bg-[#F5F4F0] hover:bg-[#0A0A0A] rounded-sm p-5 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#FFC700]/15 group-hover:bg-[#FFC700]/20 rounded-sm flex items-center justify-center mb-4 transition-colors">
                    <Icon
                      size={18}
                      className="text-[#FFC700] group-hover:text-[#FFC700]"
                    />
                  </div>
                  <h3 className="font-bold text-[#0A0A0A] group-hover:text-white text-sm leading-tight mb-2 transition-colors">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-[#0A0A0A]/55 group-hover:text-white/50 leading-relaxed transition-colors">
                    {adv.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
