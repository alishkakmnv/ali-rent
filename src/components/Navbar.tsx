'use client'

import { useState, useEffect } from 'react'
import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'
import { cn, PHONE_DISPLAY_PRIMARY, PHONE_PRIMARY, buildPhoneLink } from '@/lib/utils'

const navLinks = [
  { label: 'Техника', href: '#fleet' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Контакты', href: '#contacts' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleAnchorClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2A2A]'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-md bg-[var(--accent)] flex items-center justify-center">
              <span className="text-black font-bold text-sm font-display">A</span>
            </div>
            <span className="font-display font-semibold text-white text-lg tracking-tight">
              Ali Servis
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className="text-sm text-neutral-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={buildPhoneLink(PHONE_PRIMARY)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-black font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone size={14} />
              Позвонить
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-[#171717] transition-colors"
            aria-label="Открыть меню"
          >
            <span className={cn('block w-5 h-0.5 bg-white transition-all duration-300', mobileOpen && 'rotate-45 translate-y-2')} />
            <span className={cn('block w-5 h-0.5 bg-white transition-all duration-300', mobileOpen && 'opacity-0')} />
            <span className={cn('block w-5 h-0.5 bg-white transition-all duration-300', mobileOpen && '-rotate-45 -translate-y-2')} />
          </button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: mobileOpen ? 'auto' : 0, opacity: mobileOpen ? 1 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 pt-2 flex flex-col gap-1 border-t border-[#2A2A2A] mt-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleAnchorClick(link.href)}
                className="text-left px-3 py-3 text-neutral-300 hover:text-white hover:bg-[#171717] rounded-lg transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
            <a
              href={buildPhoneLink(PHONE_PRIMARY)}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[var(--accent)] text-black font-semibold text-sm"
            >
              <Phone size={14} />
              {PHONE_DISPLAY_PRIMARY}
            </a>
          </div>
        </motion.div>
      </nav>
    </header>
  )
}
