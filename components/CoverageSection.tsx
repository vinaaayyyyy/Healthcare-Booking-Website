'use client'

import { motion } from 'framer-motion'
import { Zap, Map, Clock } from 'lucide-react'

const serviceAreas = [
  'Central City', 'North Zone', 'East Zone', 'West Zone', 'South Zone',
  'Suburbs', 'Downtown', 'Riverside', 'Hillside', 'Midtown',
  'Garden District', 'Lake View', 'Tech Park', 'Industrial Area', 'Airport Zone',
]

const featureCards = [
  {
    icon: Zap,
    title: 'Fast Response',
    description: 'Under 15-minute dispatch to all covered zones.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Map,
    title: 'Wide Coverage',
    description: 'Serving 30+ localities across the entire metro area.',
    color: 'text-primary-blue',
    bg: 'bg-primary-blue/8',
  },
  {
    icon: Clock,
    title: '24/7 Emergency',
    description: 'Emergency teams on standby around the clock.',
    color: 'text-primary-green',
    bg: 'bg-primary-green/8',
  },
]

// Custom SVG map illustration
function MapIllustration() {
  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-sm mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer ring */}
      <circle cx="200" cy="200" r="160" fill="#EFF6FF" stroke="#BFDBFE" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="120" fill="#DBEAFE" stroke="#93C5FD" strokeWidth="1" />
      <circle cx="200" cy="200" r="80" fill="#BFDBFE" stroke="#60A5FA" strokeWidth="1" />
      <circle cx="200" cy="200" r="40" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1.5" />

      {/* Grid lines */}
      <line x1="40" y1="200" x2="360" y2="200" stroke="#BFDBFE" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="200" y1="40" x2="200" y2="360" stroke="#BFDBFE" strokeWidth="0.8" strokeDasharray="4 4" />
      <line x1="86" y1="86" x2="314" y2="314" stroke="#BFDBFE" strokeWidth="0.5" strokeDasharray="4 4" />
      <line x1="314" y1="86" x2="86" y2="314" stroke="#BFDBFE" strokeWidth="0.5" strokeDasharray="4 4" />

      {/* Outer dots */}
      <circle cx="200" cy="40" r="5" fill="#3B82F6" />
      <circle cx="360" cy="200" r="5" fill="#3B82F6" />
      <circle cx="200" cy="360" r="5" fill="#3B82F6" />
      <circle cx="40" cy="200" r="5" fill="#3B82F6" />
      <circle cx="86" cy="86" r="4" fill="#60A5FA" />
      <circle cx="314" cy="86" r="4" fill="#60A5FA" />
      <circle cx="86" cy="314" r="4" fill="#60A5FA" />
      <circle cx="314" cy="314" r="4" fill="#60A5FA" />

      {/* Mid dots */}
      <circle cx="200" cy="120" r="4" fill="#22C55E" />
      <circle cx="280" cy="200" r="4" fill="#22C55E" />
      <circle cx="200" cy="280" r="4" fill="#22C55E" />
      <circle cx="120" cy="200" r="4" fill="#22C55E" />

      {/* Center icon */}
      <circle cx="200" cy="200" r="22" fill="#1D4ED8" />
      <path d="M200 190 C200 190 192 198 192 205 C192 209.4 195.6 213 200 213 C204.4 213 208 209.4 208 205 C208 198 200 190 200 190Z" fill="white" />
      <circle cx="200" cy="203" r="3" fill="#1D4ED8" />

      {/* Pulsing rings */}
      <circle cx="200" cy="200" r="30" fill="none" stroke="#22C55E" strokeWidth="2" opacity="0.5">
        <animate attributeName="r" values="30;50;30" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
}

export default function CoverageSection() {
  return (
    <section id="coverage" className="bg-white py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold text-primary-green tracking-widest uppercase bg-primary-green/8 rounded-full border border-primary-green/15 mb-4">
            Coverage Areas
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-5 tracking-tight">
            We Come to{' '}
            <span className="bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">
              You
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Comprehensive home healthcare coverage across the entire metropolitan area and surrounding regions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-center">
          {/* Left — Service area pills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-lg font-bold text-text-primary mb-5">Service Locations</h3>
            <div className="flex flex-wrap gap-2.5">
              {serviceAreas.map((area, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.06, backgroundColor: '#EFF6FF' }}
                  className="px-4 py-2 bg-section-bg text-text-primary text-sm font-medium rounded-full border border-border-color cursor-default transition-all hover:border-primary-blue/30 hover:text-primary-blue"
                >
                  {area}
                </motion.span>
              ))}
            </div>
            <p className="text-sm text-text-secondary mt-5 font-medium">+ Many more areas available. Call to confirm.</p>
          </motion.div>

          {/* Center — Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-green-50/50 rounded-[24px] lg:rounded-[32px] p-4 sm:p-8 border border-border-color shadow-card">
              <MapIllustration />
              <p className="text-center text-sm font-semibold text-text-secondary mt-4">30+ km coverage radius</p>
            </div>
          </motion.div>

          {/* Right — Feature cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {featureCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ x: 4 }}
                className="flex gap-5 p-6 bg-section-bg rounded-2xl border border-border-color hover:border-primary-blue/20 hover:bg-white hover:shadow-card transition-all duration-300"
              >
                <div className={`w-12 h-12 ${card.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <card.icon className={`w-6 h-6 ${card.color}`} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-base font-bold text-text-primary mb-1">{card.title}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
