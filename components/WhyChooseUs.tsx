'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  ShieldCheck, Award, Heart, Zap, Headphones, Users
} from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Emergency Ready',
    description: 'Fully equipped emergency medical teams available 24/7, deployed within minutes of your call.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Award,
    title: 'Certified Medical Team',
    description: 'All our doctors, nurses, and specialists hold valid certifications and undergo regular training.',
    color: 'text-primary-blue',
    bg: 'bg-primary-blue/8',
  },
  {
    icon: Heart,
    title: 'Personalized Care',
    description: 'Every patient receives a tailored care plan designed around their unique health needs.',
    color: 'text-red-500',
    bg: 'bg-red-50',
  },
  {
    icon: Zap,
    title: 'Rapid Response',
    description: 'Average 15-minute response time — we are always where you need us, precisely when you need us.',
    color: 'text-primary-green',
    bg: 'bg-primary-green/8',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our dedicated support team is always reachable for queries, follow-ups, and care coordination.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
  {
    icon: Users,
    title: '5000+ Successful Cases',
    description: 'Thousands of families have trusted us for critical home healthcare with outstanding outcomes.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-white py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_24px_64px_rgba(15,23,42,0.14)]">
              <Image
                src="/images/why-choose-us.png"
                alt="Healthcare team providing home care"
                width={600}
                height={620}
                className="object-cover w-full h-[560px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/20 to-transparent" />
            </div>
            {/* Stats badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-glass border border-border-color p-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-green/10 rounded-xl flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary-green" />
                </div>
                <div>
                  <p className="text-2xl font-extrabold text-text-primary">98%</p>
                  <p className="text-sm text-text-secondary">Recovery Success Rate</p>
                </div>
              </div>
            </motion.div>
            {/* Corner accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary-blue/20 to-primary-green/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-bold text-primary-green tracking-widest uppercase bg-primary-green/8 rounded-full border border-primary-green/15 mb-5">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 tracking-tight leading-tight">
              Why Families{' '}
              <span className="bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">
                Trust Us
              </span>
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-10">
              We combine medical expertise with genuine compassion to deliver healthcare that feels personal, reliable, and always professional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex gap-4 p-4 rounded-2xl hover:bg-section-bg transition-colors"
                >
                  <div className={`w-11 h-11 ${benefit.bg} rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5`}>
                    <benefit.icon className={`w-5 h-5 ${benefit.color}`} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-text-primary mb-1">{benefit.title}</h4>
                    <p className="text-sm text-text-secondary leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
