'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Clock, TrendingUp, Star, Briefcase } from 'lucide-react'

const achievements = [
  { icon: Users, value: '5000+', label: 'Patients Treated', color: 'text-primary-blue', bg: 'bg-primary-blue/8' },
  { icon: Briefcase, value: '15 Yrs', label: 'Experience', color: 'text-primary-green', bg: 'bg-primary-green/8' },
  { icon: Clock, value: '24/7', label: 'Availability', color: 'text-amber-500', bg: 'bg-amber-50' },
  { icon: TrendingUp, value: '98%', label: 'Recovery Success', color: 'text-purple-500', bg: 'bg-purple-50' },
]

export default function DoctorProfile() {
  return (
    <section className="bg-section-bg py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold text-primary-blue tracking-widest uppercase bg-primary-blue/8 rounded-full border border-primary-blue/15 mb-4">
            Meet Our Lead
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
            Expert Medical Leadership
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left — Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[32px] overflow-hidden shadow-[0_24px_64px_rgba(15,23,42,0.14)]">
              <Image
                src="/images/doctor-portrait.png"
                alt="Dr. Sarah Mitchell — Chief Medical Director"
                width={560}
                height={620}
                className="object-cover w-full h-[580px]"
              />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-dark-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-bold text-xl">Dr. Sarah Mitchell</p>
                <p className="text-white/80 text-sm">Chief Medical Director</p>
              </div>
            </div>

            {/* Credential badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-8 top-16 bg-white rounded-2xl shadow-glass border border-border-color px-5 py-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary">Board Certified</p>
                  <p className="text-sm font-bold text-text-primary">Emergency Medicine</p>
                </div>
              </div>
            </motion.div>

            {/* Stars */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -left-8 bottom-24 bg-white rounded-2xl shadow-glass border border-border-color px-5 py-4"
            >
              <div className="flex items-center gap-2 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-text-secondary">Patient Rating · 500+ reviews</p>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 bg-primary-green rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-primary-green">Available for consultation</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-bold text-text-primary mb-1">Dr. Sarah Mitchell</h3>
            <p className="text-lg text-primary-blue font-semibold mb-2">Chief Medical Director</p>
            <p className="text-text-secondary font-medium mb-6">15+ Years Experience · Emergency & Home Medicine</p>

            <div className="w-16 h-1 bg-gradient-to-r from-primary-blue to-primary-green rounded-full mb-8" />

            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              Dr. Mitchell is a board-certified emergency medicine specialist with over 15 years of experience leading critical care teams. She pioneered our home healthcare delivery model, ensuring that every patient receives hospital-grade care in the comfort of their home.
            </p>
            <p className="text-[15px] text-text-secondary leading-relaxed mb-10">
              Her philosophy is simple: healthcare should be accessible, compassionate, and uncompromisingly professional — regardless of where the patient is.
            </p>

            {/* Achievements grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((ach, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-5 bg-white rounded-2xl border border-border-color shadow-card hover:shadow-card-hover transition-shadow"
                >
                  <div className={`w-11 h-11 ${ach.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <ach.icon className={`w-5 h-5 ${ach.color}`} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-text-primary">{ach.value}</p>
                    <p className="text-xs text-text-secondary font-medium">{ach.label}</p>
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
