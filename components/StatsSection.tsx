'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Users, Zap, Star } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Patients Served',
    description: 'Families trust us every day',
  },
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Availability',
    description: 'No holidays. No breaks.',
  },
  {
    icon: Zap,
    value: 15,
    suffix: ' Min',
    label: 'Average Response',
    description: 'Fastest in the city',
  },
  {
    icon: Star,
    value: 5,
    suffix: '.0',
    label: 'Patient Rating',
    description: '500+ verified reviews',
  },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 2000
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start = Math.min(start + step, value)
      setCount(start)
      if (start >= value) clearInterval(timer)
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function StatsSection() {
  return (
    <section className="bg-dark-navy py-16 lg:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-green/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.06)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold text-primary-green tracking-widest uppercase bg-primary-green/10 rounded-full border border-primary-green/20 mb-4">
            By The Numbers
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white tracking-tight">
            Trusted by Thousands,{' '}
            <span className="bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">
              Proven Every Day
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="relative p-4 sm:p-6 lg:p-8 rounded-2xl lg:rounded-3xl border border-white/8 bg-white/4 backdrop-blur-sm text-center hover:border-white/20 hover:bg-white/8 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-white/8 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-white/12 transition-colors">
                <stat.icon className="w-7 h-7 text-primary-green" strokeWidth={1.8} />
              </div>

              {/* Number */}
              <p className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-1 tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-base font-bold text-white/90 mb-1">{stat.label}</p>
              <p className="text-sm text-white/50">{stat.description}</p>

              {/* Bottom glow line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-primary-blue to-primary-green rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
