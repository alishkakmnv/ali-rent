"use client"

import { Phone, Mail, MapPin } from "lucide-react"

const navGroups = [
  {
    title: "Техника",
    links: [
      { label: "Экскаваторы", href: "#catalog" },
      { label: "Автокраны", href: "#catalog" },
      { label: "Самосвалы", href: "#catalog" },
      { label: "Бульдозеры", href: "#catalog" },
      { label: "Погрузчики", href: "#catalog" },
    ],
  },
  {
    title: "Компания",
    links: [
      { label: "О нас", href: "#" },
      { label: "Как мы работаем", href: "#how-we-work" },
      { label: "Кейсы", href: "#cases" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Города",
    links: [
      { label: "Павлодар", href: "#contacts" },
      { label: "Астана", href: "#contacts" },
      { label: "Алматы", href: "#contacts" },
      { label: "По всему Казахстану", href: "#contacts" },
    ],
  },
]

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-[#060606] border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-[#FFC700] rounded-sm flex items-center justify-center">
                <span className="text-[#0A0A0A] font-black text-sm">AZ</span>
              </div>
              <div>
                <div className="font-bold text-white text-sm leading-tight">
                  AZIAN RENTAL
                </div>
                <div className="text-[10px] text-white/40 leading-none tracking-widest uppercase">
                  Спецтехника Казахстан
                </div>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed mb-6 max-w-xs">
              Аренда спецтехники в Казахстане. Собственный парк 60+ единиц.
              Экскаваторы, краны, самосвалы и другая техника с машинистом.
            </p>

            <div className="space-y-3">
              <a
                href="tel:+77001234567"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-[#FFC700] transition-colors"
              >
                <Phone size={13} className="text-[#FFC700]" />
                +7 (700) 123-45-67
              </a>
              <a
                href="mailto:info@azian-rental.kz"
                className="flex items-center gap-2.5 text-sm text-white/50 hover:text-[#FFC700] transition-colors"
              >
                <Mail size={13} className="text-[#FFC700]" />
                info@azian-rental.kz
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/50">
                <MapPin size={13} className="text-[#FFC700] mt-0.5 shrink-0" />
                г. Павлодар, ул. Промышленная, 24
              </div>
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <div className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">
                {group.title}
              </div>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="text-sm text-white/50 hover:text-white transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-white/25">
            © 2024 AZIAN RENTAL. Все права защищены.
          </div>
          <div className="flex items-center gap-6">
            <button className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Политика конфиденциальности
            </button>
            <button className="text-xs text-white/25 hover:text-white/50 transition-colors">
              Договор оферты
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
