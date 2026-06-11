'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Clock, Users, Zap, Heart } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    label: '24/7 Availability',
    value: 24,
    suffix: '/7',
    color: 'text-primary-blue',
    bg: 'bg-primary-blue/8',
    description: 'Round-the-clock care',
  },
  {
    icon: Users,
    label: 'Patients Served',
    value: 5000,
    suffix: '+',
    color: 'text-primary-green',
    bg: 'bg-primary-green/8',
    description: 'Trusted by families',
  },
  {
    icon: Zap,
    label: 'Avg. Response Time',
    value: 15,
    suffix: ' Min',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    description: 'Fastest in the region',
  },
  {
    icon: Heart,
    label: 'Patient Satisfaction',
    value: 100,
    suffix: '%',
    color: 'text-red-500',
    bg: 'bg-red-50',
    description: 'We never compromise',
  },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(value / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function TrustBar() {
  return (
    <section id="trust-bar" className="bg-white border-y border-border-color">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="flex flex-col items-center text-center gap-4 p-6 rounded-3xl hover:bg-section-bg transition-colors duration-200"
            >
              <div className={`w-14 h-14 ${stat.bg} rounded-2xl flex items-center justify-center`}>
                <stat.icon className={`w-7 h-7 ${stat.color}`} strokeWidth={1.8} />
              </div>
              <div>
                <p className={`text-2xl sm:text-4xl font-extrabold ${stat.color} tracking-tight`}>
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-base font-bold text-text-primary mt-1">{stat.label}</p>
                <p className="text-sm text-text-secondary mt-0.5">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
