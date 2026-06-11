'use client'

import { motion } from 'framer-motion'
import { Phone, MessageSquare, UserCheck, Heart } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Call Us',
    description: 'Reach our 24/7 hotline or send a WhatsApp message. Our support team responds immediately.',
    color: 'text-primary-blue',
    bg: 'bg-primary-blue/8',
    border: 'border-primary-blue/20',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Speak With Medical Expert',
    description: 'Our triage team assesses your needs and dispatches the right medical professional instantly.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
  },
  {
    number: '03',
    icon: UserCheck,
    title: 'Professional Arrives',
    description: 'A certified doctor or nurse arrives at your door within 15 minutes — fully equipped.',
    color: 'text-amber-500',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
  },
  {
    number: '04',
    icon: Heart,
    title: 'Receive Expert Care',
    description: 'Receive comprehensive medical treatment, diagnostics, or emergency care in the comfort of home.',
    color: 'text-primary-green',
    bg: 'bg-primary-green/8',
    border: 'border-primary-green/20',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-white py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold text-primary-blue tracking-widest uppercase bg-primary-blue/8 rounded-full border border-primary-blue/15 mb-4">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-5 tracking-tight">
            Expert Care in{' '}
            <span className="bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            From your first call to receiving care — we make it effortless, fast, and stress-free.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-blue via-primary-green to-primary-green" style={{ left: '12.5%', right: '12.5%' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step circle */}
                <div className={`relative w-[72px] h-[72px] ${step.bg} ${step.border} border-2 rounded-2xl flex items-center justify-center mb-6 shadow-card z-10`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} strokeWidth={1.8} />
                  {/* Number badge */}
                  <div className={`absolute -top-3 -right-3 w-7 h-7 bg-gradient-to-br from-primary-blue to-primary-green rounded-full flex items-center justify-center shadow-sm`}>
                    <span className="text-[11px] font-extrabold text-white">{i + 1}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-3">{step.title}</h3>
                <p className="text-[15px] text-text-secondary leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="tel:+918307374806"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-blue to-primary-green text-white font-bold text-base rounded-btn shadow-lg hover:shadow-glow-blue transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            Start Now — Call Us Free
          </a>
        </motion.div>
      </div>
    </section>
  )
}
