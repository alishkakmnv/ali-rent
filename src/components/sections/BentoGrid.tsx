"use client"

import { motion } from "framer-motion"
import {
  Shovel,
  Truck,
  Forklift,
  ArrowUpDown,
  Wrench,
  Layers,
  MoveHorizontal,
  Container,
} from "lucide-react"
import { categories } from "@/data/categories"

const iconMap: Record<string, React.ElementType> = {
  construction: Shovel,
  crane: ArrowUpDown,
  truck: Truck,
  bulldozer: MoveHorizontal,
  loader: Forklift,
  aerial: Layers,
  manipulator: Wrench,
  mixer: Container,
}

const cardSizes = [
  "lg:col-span-2 lg:row-span-2",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-2 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
  "lg:col-span-1 lg:row-span-1",
]

export default function BentoGrid() {
  return (
    <section className="py-24 bg-[#F5F4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#FFC700] mb-3">
            Наша техника
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] leading-tight">
            8 категорий спецтехники
            <br />
            <span className="text-[#0A0A0A]/40">в наличии и под заказ</span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-3 gap-4 auto-rows-[200px]">
          {categories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Wrench
            const isLarge = i === 0
            const isWide = i === 5

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className={`${cardSizes[i]} group relative bg-[#0A0A0A] rounded-sm overflow-hidden cursor-pointer`}
              >
                {/* Yellow accent bar */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#FFC700] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.07] transition-opacity"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, #FFC700 0, #FFC700 1px, transparent 0, transparent 50%)",
                    backgroundSize: "12px 12px",
                  }}
                />

                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div>
                    <div className="w-12 h-12 bg-[#FFC700]/10 group-hover:bg-[#FFC700]/20 transition-colors rounded-sm flex items-center justify-center mb-4">
                      <Icon
                        size={isLarge ? 28 : 22}
                        className="text-[#FFC700]"
                      />
                    </div>
                    <h3
                      className={`font-bold text-white leading-tight mb-1 ${isLarge ? "text-2xl" : "text-base"}`}
                    >
                      {cat.name}
                    </h3>
                    {(isLarge || isWide) && (
                      <p className="text-sm text-white/50 mt-2">
                        {cat.description}
                      </p>
                    )}
                  </div>

                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider mb-0.5">
                        от
                      </div>
                      <div
                        className={`font-black text-[#FFC700] ${isLarge ? "text-3xl" : "text-xl"}`}
                      >
                        {cat.priceFrom.toLocaleString("ru-RU")} ₸
                      </div>
                      <div className="text-xs text-white/40">/{cat.unit}</div>
                    </div>
                    <div className="w-8 h-8 border border-white/10 group-hover:border-[#FFC700]/50 rounded-sm flex items-center justify-center transition-colors">
                      <span className="text-white/30 group-hover:text-[#FFC700] text-lg leading-none transition-colors">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
