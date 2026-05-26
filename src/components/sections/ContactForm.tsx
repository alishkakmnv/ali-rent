"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const equipmentOptions = [
  "Экскаватор",
  "Автокран",
  "Самосвал",
  "Бульдозер",
  "Фронтальный погрузчик",
  "Автовышка",
  "Манипулятор",
  "Бетоносмеситель",
  "Другое",
]

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    company: "",
    equipment: "",
    shifts: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  const inputCls =
    "w-full bg-white/5 border border-white/15 rounded-sm px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#FFC700]/60 focus:bg-white/8 transition-colors"

  return (
    <section id="contacts" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: contacts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#FFC700] mb-4">
              Контакты
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
              Получите
              <br />
              коммерческое
              <br />
              <span className="text-white/30">предложение</span>
            </h2>
            <p className="text-white/50 leading-relaxed mb-10">
              Оставьте заявку — менеджер перезвонит за 15 минут и подберёт
              технику под ваш объект.
            </p>

            {/* Contact info */}
            <div className="space-y-5 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FFC700]/10 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <Phone size={16} className="text-[#FFC700]" />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wide mb-1">
                    Телефон (Павлодар)
                  </div>
                  <a
                    href="tel:+77171234567"
                    className="font-bold text-white hover:text-[#FFC700] transition-colors text-lg"
                  >
                    +7 (717) 123-45-67
                  </a>
                  <div className="text-xs text-white/30 uppercase tracking-wide mb-1 mt-3">
                    Телефон (Астана / Алматы)
                  </div>
                  <a
                    href="tel:+77001234567"
                    className="font-bold text-white hover:text-[#FFC700] transition-colors text-lg"
                  >
                    +7 (700) 123-45-67
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FFC700]/10 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={16} className="text-[#FFC700]" />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wide mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:info@azian-rental.kz"
                    className="font-bold text-white hover:text-[#FFC700] transition-colors"
                  >
                    info@azian-rental.kz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#FFC700]/10 rounded-sm flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={16} className="text-[#FFC700]" />
                </div>
                <div>
                  <div className="text-xs text-white/30 uppercase tracking-wide mb-1">
                    Адрес парка техники
                  </div>
                  <div className="font-semibold text-white">
                    г. Павлодар, ул. Промышленная, 24
                  </div>
                  <div className="text-sm text-white/40 mt-0.5">
                    Пн–Пт: 08:00–20:00 · Сб–Вс: 09:00–18:00
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="h-48 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(#FFC700 1px, transparent 1px), linear-gradient(to right, #FFC700 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative text-center">
                <MapPin size={32} className="text-[#FFC700] mx-auto mb-2" />
                <div className="text-sm text-white/40">
                  Карта — интегрируется по необходимости
                </div>
                <div className="text-xs text-white/25 mt-1">
                  2GIS / Яндекс.Карты / Google Maps
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center bg-white/5 border border-white/10 rounded-sm p-12"
              >
                <CheckCircle size={56} className="text-[#FFC700] mb-6" />
                <h3 className="text-2xl font-black text-white mb-3">
                  Заявка отправлена!
                </h3>
                <p className="text-white/50 leading-relaxed">
                  Менеджер свяжется с вами в течение 15 минут.
                  <br />
                  Режим работы: 08:00–20:00, пн–пт.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 border border-white/10 rounded-sm p-8 space-y-5"
              >
                <h3 className="font-bold text-white text-xl mb-6">
                  Заявка на технику
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">
                      Ваше имя *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Иван Петров"
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">
                      Телефон *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+7 (700) 000-00-00"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">
                    Компания / организация
                  </label>
                  <input
                    type="text"
                    placeholder="ТОО «Стройгрупп»"
                    value={form.company}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, company: e.target.value }))
                    }
                    className={inputCls}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">
                      Тип техники
                    </label>
                    <select
                      value={form.equipment}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, equipment: e.target.value }))
                      }
                      className={`${inputCls} appearance-none cursor-pointer`}
                    >
                      <option value="" className="bg-[#111]">
                        Выберите...
                      </option>
                      {equipmentOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">
                      Количество смен
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="3"
                      value={form.shifts}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, shifts: e.target.value }))
                      }
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-2 block">
                    Описание объекта / задачи
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Опишите объём работ, адрес объекта, сроки..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#FFC700] hover:bg-[#FFD740] text-[#0A0A0A] font-bold h-13 text-base rounded-sm group"
                >
                  <Send size={16} className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs text-white/25 text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
                  Менеджер перезвонит в течение 15 минут.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
