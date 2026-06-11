'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, Calendar, Menu, X, Cross } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Coverage', href: '#coverage' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(15,23,42,0.08)]'
            : 'bg-white border-b border-border-color'
        }`}
        style={{ height: '90px' }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" onClick={e => { e.preventDefault(); window.scrollTo({top:0,behavior:'smooth'}) }}>
            <div className="relative w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-green rounded-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Cross className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-xl font-bold text-text-primary tracking-tight">MediCare</span>
              <span className="text-xl font-bold text-primary-blue tracking-tight">Home</span>
              <p className="text-[10px] text-text-secondary font-medium tracking-wide">EMERGENCY HOME HEALTHCARE</p>
            </div>
          </a>

          {/* Center Nav — Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-[15px] font-medium text-text-secondary hover:text-text-primary hover:bg-section-bg rounded-xl transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right CTAs — Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="https://wa.me/918307374806"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-semibold text-sm rounded-btn border border-[#25D366]/30 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </motion.a>
            <motion.a
              href="tel:+918307374806"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-4 py-2.5 bg-primary-blue/10 hover:bg-primary-blue/20 text-primary-blue font-semibold text-sm rounded-btn border border-primary-blue/20 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>
            <motion.button
              onClick={() => scrollTo('#contact')}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-primary-blue to-primary-green text-white font-semibold text-sm rounded-btn shadow-md hover:shadow-glow-blue transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </motion.button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-section-bg transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[90px] left-0 right-0 z-40 bg-white border-b border-border-color shadow-xl"
          >
            <div className="p-6 space-y-2">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-section-bg rounded-xl transition-all"
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-4 grid grid-cols-2 gap-3">
                <a href="https://wa.me/918307374806" className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366]/10 text-[#128C7E] font-semibold text-sm rounded-btn border border-[#25D366]/30">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href="tel:+918307374806" className="flex items-center justify-center gap-2 px-4 py-3 bg-primary-blue/10 text-primary-blue font-semibold text-sm rounded-btn border border-primary-blue/20">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full py-3 bg-gradient-to-r from-primary-blue to-primary-green text-white font-semibold rounded-btn shadow-md"
              >
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
