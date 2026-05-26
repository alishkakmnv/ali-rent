"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator as CalcIcon, ArrowRight, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { categories } from "@/data/categories"

const DELIVERY_COST = 25000

export default function Calculator() {
  const [categoryId, setCategoryId] = useState(categories[0].id)
  const [shifts, setShifts] = useState(3)
  const [withDelivery, setWithDelivery] = useState(false)
  const [total, setTotal] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const selectedCategory = categories.find((c) => c.id === categoryId)!

  useEffect(() => {
    setIsAnimating(true)
    const base = selectedCategory.priceFrom * shifts
    const delivery = withDelivery ? DELIVERY_COST : 0
    const timeout = setTimeout(() => {
      setTotal(base + delivery)
      setIsAnimating(false)
    }, 200)
    return () => clearTimeout(timeout)
  }, [categoryId, shifts, withDelivery, selectedCategory.priceFrom])

  const scrollToContacts = () => {
    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="calculator" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#FFC700] mb-4">
              Рассчитать стоимость
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Калькулятор
              <br />
              <span className="text-white/30">аренды</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Выберите тип техники и количество смен — сумма обновится
              автоматически. Финальная цена уточняется у менеджера.
            </p>

            <div className="space-y-3">
              {[
                "Цены указаны с учётом машиниста",
                "Топливо и ГСМ включены в стоимость",
                "Документы для бухгалтерии с НДС",
                "Оплата по факту выполненных работ",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-[#FFC700]/20 border border-[#FFC700]/40 rounded-sm flex items-center justify-center shrink-0">
                    <div className="w-1.5 h-1.5 bg-[#FFC700] rounded-full" />
                  </div>
                  <span className="text-sm text-white/60">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: calculator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 border border-white/10 rounded-sm p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#FFC700]/10 rounded-sm flex items-center justify-center">
                <CalcIcon size={20} className="text-[#FFC700]" />
              </div>
              <h3 className="font-bold text-white text-lg">
                Расчёт стоимости
              </h3>
            </div>

            {/* Equipment type select */}
            <div className="mb-6">
              <label className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">
                Тип техники
              </label>
              <Select value={categoryId} onValueChange={(v) => v && setCategoryId(v)}>
                <SelectTrigger className="bg-white/5 border-white/15 text-white rounded-sm h-12 focus:ring-[#FFC700] focus:border-[#FFC700]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#111] border-white/15">
                  {categories.map((cat) => (
                    <SelectItem
                      key={cat.id}
                      value={cat.id}
                      className="text-white focus:bg-white/10 focus:text-[#FFC700]"
                    >
                      {cat.name}{" "}
                      <span className="text-white/40">
                        — от {cat.priceFrom.toLocaleString("ru-RU")} ₸/смена
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Shifts counter */}
            <div className="mb-6">
              <label className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">
                Количество смен (8 часов)
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setShifts((s) => Math.max(1, s - 1))}
                  className="w-12 h-12 border border-white/15 rounded-sm flex items-center justify-center text-white hover:border-[#FFC700]/50 hover:text-[#FFC700] transition-colors"
                >
                  <Minus size={16} />
                </button>
                <div className="flex-1 h-12 bg-white/5 border border-white/15 rounded-sm flex items-center justify-center">
                  <span className="text-2xl font-black text-white">
                    {shifts}
                  </span>
                </div>
                <button
                  onClick={() => setShifts((s) => s + 1)}
                  className="w-12 h-12 border border-white/15 rounded-sm flex items-center justify-center text-white hover:border-[#FFC700]/50 hover:text-[#FFC700] transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Delivery checkbox */}
            <div className="mb-8">
              <label className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">
                Дополнительно
              </label>
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-sm px-4 py-3 cursor-pointer group" onClick={() => setWithDelivery((v) => !v)}>
                <Checkbox
                  checked={withDelivery}
                  onCheckedChange={(v) => setWithDelivery(!!v)}
                  className="border-white/30 data-[state=checked]:bg-[#FFC700] data-[state=checked]:border-[#FFC700]"
                />
                <div>
                  <div className="text-sm font-medium text-white">
                    Доставка техники на объект
                  </div>
                  <div className="text-xs text-white/40">
                    +{DELIVERY_COST.toLocaleString("ru-RU")} ₸ (в пределах
                    города)
                  </div>
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="border-t border-white/10 pt-6 mb-6">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-white/50">
                  {selectedCategory.name} × {shifts} смен
                </span>
                <span className="text-sm text-white/50">
                  {(selectedCategory.priceFrom * shifts).toLocaleString(
                    "ru-RU"
                  )}{" "}
                  ₸
                </span>
              </div>
              {withDelivery && (
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-white/50">Доставка</span>
                  <span className="text-sm text-white/50">
                    {DELIVERY_COST.toLocaleString("ru-RU")} ₸
                  </span>
                </div>
              )}
              <div className="flex items-end justify-between mt-4">
                <span className="text-base font-semibold text-white/60">
                  Итого (от)
                </span>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={total}
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    className="text-3xl font-black text-[#FFC700]"
                  >
                    {total.toLocaleString("ru-RU")} ₸
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <Button
              onClick={scrollToContacts}
              className="w-full bg-[#FFC700] hover:bg-[#FFD740] text-[#0A0A0A] font-bold h-12 rounded-sm group text-base"
            >
              Получить точный расчёт
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
