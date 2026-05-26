"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "#catalog", label: "Каталог" },
  { href: "#calculator", label: "Калькулятор" },
  { href: "#how-we-work", label: "Как работаем" },
  { href: "#cases", label: "Кейсы" },
  { href: "#contacts", label: "Контакты" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <div className="w-9 h-9 bg-[#FFC700] rounded-sm flex items-center justify-center shrink-0">
              <span className="text-[#0A0A0A] font-black text-sm leading-none">
                AZ
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-white text-base leading-tight tracking-tight">
                AZIAN RENTAL
              </div>
              <div className="text-[10px] text-white/50 leading-none tracking-widest uppercase">
                Спецтехника Казахстан
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+77001234567"
              className="flex items-center gap-1.5 text-sm text-white/80 hover:text-[#FFC700] transition-colors"
            >
              <Phone size={14} />
              +7 (700) 123-45-67
            </a>
            <Button
              onClick={() => scrollTo("#contacts")}
              className="bg-[#FFC700] hover:bg-[#FFD740] text-[#0A0A0A] font-bold text-sm px-5 h-9 rounded-sm"
            >
              Получить КП
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger
              render={
                <button className="lg:hidden text-white p-1">
                  <Menu size={24} />
                </button>
              }
            />
            <SheetContent
              side="right"
              showCloseButton={false}
              className="bg-[#0A0A0A] border-white/10 w-72"
            >
              <div className="flex flex-col h-full pt-8 pb-6 px-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#FFC700] rounded-sm flex items-center justify-center">
                      <span className="text-[#0A0A0A] font-black text-xs">
                        AZ
                      </span>
                    </div>
                    <span className="font-bold text-white">AZIAN RENTAL</span>
                  </div>
                  <SheetClose
                    render={
                      <button className="text-white/50 hover:text-white transition-colors">
                        <X size={20} />
                      </button>
                    }
                  />
                </div>
                <nav className="flex flex-col gap-1 flex-1">
                  {navLinks.map((link) => (
                    <SheetClose
                      key={link.href}
                      render={
                        <button
                          onClick={() => scrollTo(link.href)}
                          className="text-left text-white/80 hover:text-white hover:bg-white/5 px-3 py-3 rounded-sm text-sm font-medium transition-colors"
                        >
                          {link.label}
                        </button>
                      }
                    />
                  ))}
                </nav>
                <div className="space-y-3 pt-6 border-t border-white/10">
                  <a
                    href="tel:+77001234567"
                    className="flex items-center gap-2 text-white/70 text-sm"
                  >
                    <Phone size={14} className="text-[#FFC700]" />
                    +7 (700) 123-45-67
                  </a>
                  <SheetClose
                    render={
                      <button
                        onClick={() => scrollTo("#contacts")}
                        className="w-full bg-[#FFC700] hover:bg-[#FFD740] text-[#0A0A0A] font-bold rounded-sm py-2.5 text-sm transition-colors"
                      >
                        Получить КП
                      </button>
                    }
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  )
}
