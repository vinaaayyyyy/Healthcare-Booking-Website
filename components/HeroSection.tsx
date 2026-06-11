'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Phone, MessageCircle, Calendar, CheckCircle, Star, Shield, Clock, Users, ChevronRight } from 'lucide-react'

const trustItems = [
  'Available 24/7',
  'Licensed Professionals',
  'Fast Emergency Response',
  '5000+ Patients Served',
]

function scrollTo(href: string) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-[90px] pb-8">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-green-50/60 pointer-events-none" />
      <div className="absolute top-20 -left-40 w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-primary-green/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT CONTENT ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col gap-5 sm:gap-8"
          >
            {/* Micro label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 w-fit"
            >
              <div className="relative flex items-center gap-2 px-4 py-2 bg-primary-green/10 border border-primary-green/25 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-green"></span>
                </span>
                <span className="text-sm font-semibold text-primary-green tracking-wide">24/7 Emergency Home Healthcare</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-[2rem] sm:text-5xl lg:text-[68px] font-extrabold text-text-primary leading-[1.1] tracking-tight">
                Expert Medical Care{' '}
                <span className="bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">
                  At Your Doorstep,
                </span>{' '}
                Anytime You Need It
              </h1>
            </motion.div>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-text-secondary leading-relaxed max-w-xl"
            >
              Professional doctors, nurses, elderly care specialists, diagnostic services, and emergency medical support delivered directly to your home.
            </motion.p>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-2 sm:gap-3"
            >
              {trustItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 bg-primary-green/15 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3.5 h-3.5 text-primary-green" strokeWidth={2.5} />
                  </div>
                  <span className="text-[15px] font-medium text-text-primary">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                href="tel:+918307374806"
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(29,78,216,0.3)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-7 py-4 bg-primary-blue text-white font-bold text-base rounded-btn shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </motion.a>
              <motion.button
                onClick={() => scrollTo('#contact')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-7 py-4 bg-white text-text-primary font-bold text-base rounded-btn border-2 border-border-color hover:border-primary-blue/40 hover:bg-section-bg transition-all shadow-card"
              >
                <Calendar className="w-5 h-5 text-primary-blue" />
                Book Appointment
              </motion.button>
              <motion.a
                href="https://wa.me/918307374806"
                whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(37,211,102,0.3)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 px-6 py-4 bg-[#25D366] text-white font-bold text-base rounded-btn shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </motion.a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              <div className="flex items-center gap-3">
                <div className="flex -space-x-1.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-green-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
                    <span className="text-sm font-bold text-text-primary ml-1">5.0</span>
                  </div>
                  <p className="text-xs text-text-secondary">500+ Google Reviews</p>
                </div>
              </div>
              <div className="w-px h-10 bg-border-color hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary-green/10 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary-green" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary">99%</p>
                  <p className="text-xs text-text-secondary">Patient Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── RIGHT CONTENT — Image + Floating Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="relative hidden lg:block"
          >
            {/* Main image */}
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_32px_80px_rgba(15,23,42,0.15)]">
              <Image
                src="/images/hero-healthcare.png"
                alt="Home healthcare professional visiting patient"
                width={620}
                height={680}
                className="object-cover w-full h-[620px]"
                priority
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-dark-navy/30 to-transparent" />
            </div>

            {/* Floating card — Emergency Response */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-10 top-16 backdrop-blur-md bg-white/90 border border-white/60 rounded-2xl shadow-glass p-4 max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-red-500" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-medium">Emergency Response</p>
                  <p className="text-lg font-bold text-text-primary leading-tight">15 Min</p>
                </div>
              </div>
              <div className="mt-2 h-1 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  animate={{ width: ['0%', '90%'] }}
                  transition={{ duration: 2, delay: 1, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary-blue to-primary-green rounded-full"
                />
              </div>
              <p className="text-[10px] text-primary-green font-semibold mt-1">Fastest in the city</p>
            </motion.div>

            {/* Floating card — Patient Satisfaction */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-8 bottom-24 backdrop-blur-md bg-white/90 border border-white/60 rounded-2xl shadow-glass p-4 max-w-[180px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary-green" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-medium">Patients Served</p>
                  <p className="text-lg font-bold text-text-primary">5,000+</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
                <span className="text-xs font-bold text-text-primary ml-1">5.0</span>
              </div>
            </motion.div>

            {/* Floating badge — top right */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-6 top-10 backdrop-blur-md bg-primary-blue text-white rounded-2xl shadow-glass px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
                <span className="text-sm font-bold">Available Now</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => scrollTo('#trust-bar')}
      >
        <span className="text-xs text-text-secondary font-medium">Scroll to explore</span>
        <ChevronRight className="w-4 h-4 text-text-secondary rotate-90" />
      </motion.div>
    </section>
  )
}
