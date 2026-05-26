"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { equipmentModels } from "@/data/equipment"
import { categories } from "@/data/categories"

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filtered =
    activeCategory === "all"
      ? equipmentModels
      : equipmentModels.filter((m) => m.categoryId === activeCategory)

  const scrollToContacts = () => {
    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="catalog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-[#FFC700] mb-3">
            Каталог
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] leading-tight mb-2">
            Конкретные модели
          </h2>
          <p className="text-[#0A0A0A]/50 text-lg">
            Технические характеристики и актуальные цены
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-sm text-sm font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-[#0A0A0A] text-white"
                : "bg-[#F5F4F0] text-[#0A0A0A]/60 hover:bg-[#0A0A0A]/10"
            }`}
          >
            Вся техника
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-sm text-sm font-semibold transition-all ${
                activeCategory === cat.id
                  ? "bg-[#0A0A0A] text-white"
                  : "bg-[#F5F4F0] text-[#0A0A0A]/60 hover:bg-[#0A0A0A]/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="group border border-[#0A0A0A]/10 rounded-sm overflow-hidden hover:border-[#FFC700]/60 hover:shadow-lg transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-[#0A0A0A] relative overflow-hidden">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(-45deg, #FFC700 0, #FFC700 1px, transparent 0, transparent 50%)",
                    backgroundSize: "12px 12px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-5xl mb-2 opacity-20">
                    {item.categoryId === "excavators"
                      ? "🚜"
                      : item.categoryId === "cranes"
                        ? "🏗️"
                        : item.categoryId === "dump-trucks"
                          ? "🚛"
                          : item.categoryId === "bulldozers"
                            ? "🚧"
                            : item.categoryId === "loaders"
                              ? "🚚"
                              : "⚙️"}
                  </div>
                  <span className="text-xs text-white/30 uppercase tracking-widest">
                    фото
                  </span>
                </div>
                {/* Availability badge */}
                <div className="absolute top-3 right-3">
                  {item.available ? (
                    <Badge className="bg-green-500/90 text-white text-xs border-0 rounded-sm">
                      В наличии
                    </Badge>
                  ) : (
                    <Badge className="bg-red-500/90 text-white text-xs border-0 rounded-sm">
                      Занята
                    </Badge>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="mb-4">
                  <p className="text-xs text-[#0A0A0A]/40 font-semibold uppercase tracking-wider mb-1">
                    {item.brand}
                  </p>
                  <h3 className="font-bold text-[#0A0A0A] text-lg leading-tight">
                    {item.name}{" "}
                    <span className="text-[#FFC700]">{item.model}</span>
                  </h3>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {item.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="bg-[#F5F4F0] rounded-sm px-3 py-2"
                    >
                      <div className="text-[10px] text-[#0A0A0A]/40 uppercase tracking-wide mb-0.5">
                        {spec.label}
                      </div>
                      <div className="text-sm font-bold text-[#0A0A0A]">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Prices */}
                <div className="flex items-center gap-3 mb-4 py-3 border-t border-[#0A0A0A]/8">
                  <div>
                    <div className="text-[10px] text-[#0A0A0A]/40 uppercase tracking-wide">
                      Смена (8ч)
                    </div>
                    <div className="text-xl font-black text-[#0A0A0A]">
                      {item.pricePerShift.toLocaleString("ru-RU")} ₸
                    </div>
                  </div>
                  <div className="w-px h-8 bg-[#0A0A0A]/10" />
                  <div>
                    <div className="text-[10px] text-[#0A0A0A]/40 uppercase tracking-wide">
                      Час
                    </div>
                    <div className="text-xl font-black text-[#0A0A0A]">
                      {item.pricePerHour.toLocaleString("ru-RU")} ₸
                    </div>
                  </div>
                </div>

                <Button
                  onClick={scrollToContacts}
                  disabled={!item.available}
                  className="w-full bg-[#0A0A0A] hover:bg-[#FFC700] hover:text-[#0A0A0A] text-white font-bold rounded-sm transition-all duration-300 group/btn disabled:opacity-40"
                >
                  {item.available ? "Заказать" : "Занята"}
                  {item.available && (
                    <ArrowRight
                      size={14}
                      className="ml-2 group-hover/btn:translate-x-1 transition-transform"
                    />
                  )}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
