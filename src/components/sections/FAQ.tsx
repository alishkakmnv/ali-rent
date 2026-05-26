"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqItems } from "@/data/faq"

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-[#F5F4F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[#FFC700] mb-4">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A0A0A] leading-tight mb-6">
              Часто
              <br />
              задаваемые
              <br />
              <span className="text-[#0A0A0A]/30">вопросы</span>
            </h2>
            <p className="text-[#0A0A0A]/55 leading-relaxed mb-8">
              Не нашли ответ? Позвоните нам или напишите в WhatsApp — ответим
              за 5 минут.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+77001234567"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-[#FFC700]/15 group-hover:bg-[#FFC700]/25 rounded-sm flex items-center justify-center transition-colors shrink-0">
                  <span className="text-[#FFC700] font-bold text-sm">☎</span>
                </div>
                <div>
                  <div className="text-xs text-[#0A0A0A]/40 uppercase tracking-wide">
                    Телефон
                  </div>
                  <div className="font-bold text-[#0A0A0A] group-hover:text-[#FFC700] transition-colors">
                    +7 (700) 123-45-67
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/77001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-[#FFC700]/15 group-hover:bg-[#FFC700]/25 rounded-sm flex items-center justify-center transition-colors shrink-0">
                  <span className="text-[#FFC700] font-bold text-sm">W</span>
                </div>
                <div>
                  <div className="text-xs text-[#0A0A0A]/40 uppercase tracking-wide">
                    WhatsApp
                  </div>
                  <div className="font-bold text-[#0A0A0A] group-hover:text-[#FFC700] transition-colors">
                    Написать в чат
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <Accordion className="space-y-3">
              {faqItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <AccordionItem
                    value={item.id}
                    className="border border-[#0A0A0A]/10 rounded-sm bg-white px-5 data-open:border-[#FFC700]/40 transition-colors"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold text-[#0A0A0A] hover:no-underline py-4 [&[data-state=open]]:text-[#0A0A0A]">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-[#0A0A0A]/60 leading-relaxed pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
