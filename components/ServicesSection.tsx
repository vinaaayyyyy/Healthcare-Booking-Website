'use client'

import { motion } from 'framer-motion'
import {
  Stethoscope, Heart, Droplets, FlaskConical,
  Scan, Activity, Scissors, UserCheck, ChevronRight
} from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Home Doctor Visit',
    description: 'Certified physicians visit your home for diagnosis, treatment, and medical advice.',
    color: 'text-primary-blue',
    bg: 'bg-primary-blue/8',
    gradient: 'from-blue-50 to-white',
  },
  {
    icon: Heart,
    title: 'Elderly Care',
    description: 'Specialized care programs for senior citizens — daily monitoring, medication, and companionship.',
    color: 'text-red-500',
    bg: 'bg-red-50',
    gradient: 'from-red-50 to-white',
  },
  {
    icon: Droplets,
    title: 'IV Therapy',
    description: 'Intravenous fluid therapy, vitamins, and medication administered safely at home.',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    gradient: 'from-cyan-50 to-white',
  },
  {
    icon: FlaskConical,
    title: 'Lab Tests At Home',
    description: 'Blood work, urine tests, and comprehensive diagnostic panels collected from your home.',
    color: 'text-primary-green',
    bg: 'bg-primary-green/8',
    gradient: 'from-green-50 to-white',
  },
  {
    icon: Scan,
    title: 'Home X-Ray',
    description: 'Portable digital X-ray services brought directly to your location for immediate imaging.',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
    gradient: 'from-purple-50 to-white',
  },
  {
    icon: Activity,
    title: 'Catheter Services',
    description: 'Professional catheter insertion, management, and care by trained medical staff.',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
    gradient: 'from-orange-50 to-white',
  },
  {
    icon: Scissors,
    title: 'Surgical Dressing',
    description: 'Post-operative wound care, dressing changes, and suture removal at home.',
    color: 'text-pink-500',
    bg: 'bg-pink-50',
    gradient: 'from-pink-50 to-white',
  },
  {
    icon: UserCheck,
    title: 'Patient Care Services',
    description: 'Comprehensive nursing care, personal hygiene assistance, and rehabilitation support.',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    gradient: 'from-indigo-50 to-white',
  },
]

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ServicesSection() {
  return (
    <section id="services" className="bg-section-bg py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold text-primary-blue tracking-widest uppercase bg-primary-blue/8 rounded-full border border-primary-blue/15 mb-4">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-5 tracking-tight">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Everything you need for home healthcare under one trusted provider — delivered with clinical excellence.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(15,23,42,0.12)' }}
              className="group bg-white rounded-3xl p-5 sm:p-7 border border-border-color shadow-card cursor-pointer transition-all duration-300"
            >
              <div className={`w-14 h-14 ${service.bg} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} strokeWidth={1.8} />
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2.5 leading-tight">{service.title}</h3>
              <p className="text-[15px] text-text-secondary leading-relaxed mb-5">{service.description}</p>
              <div className={`flex items-center gap-1.5 text-sm font-semibold ${service.color} group-hover:gap-3 transition-all duration-200`}>
                Learn More <ChevronRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
