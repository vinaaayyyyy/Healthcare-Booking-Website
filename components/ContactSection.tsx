'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import {
  Phone, MessageCircle, Mail, MapPin,
  AlertCircle, Clock, Send, Calendar, CheckCircle
} from 'lucide-react'

type FormData = {
  fullName: string
  phone: string
  email: string
  service: string
  preferredDate: string
  message: string
}

const WHATSAPP_NUMBER = '918307374806'

const contactInfo = [
  {
    icon: Phone,
    label: 'Emergency Hotline',
    value: '+91 83073 74806',
    href: 'tel:+918307374806',
    color: 'text-primary-blue',
    bg: 'bg-primary-blue/10',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+91 83073 74806',
    href: 'https://wa.me/918307374806',
    color: 'text-[#25D366]',
    bg: 'bg-[#25D366]/10',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'care@medicarehome.in',
    href: 'mailto:care@medicarehome.in',
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    icon: MapPin,
    label: 'Head Office',
    value: '42 Medical Centre, Bangalore — 560001',
    href: '#',
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
  },
]

const services = [
  'Home Doctor Visit', 'Elderly Care', 'IV Therapy', 'Lab Tests At Home',
  'Home X-Ray', 'Catheter Services', 'Surgical Dressing', 'Emergency Care', 'Other'
]

export default function ContactSection() {
  const [isOpening, setIsOpening] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onTouched' })

  const handleConsultationSubmit = (data: FormData) => {
    setIsOpening(true)

    const whatsappMessage = `🏥 NEW CONSULTATION REQUEST

👤 Full Name:
${data.fullName}

📞 Phone:
${data.phone}

📧 Email:
${data.email || 'Not provided'}

🩺 Service Required:
${data.service}

📅 Preferred Date:
${data.preferredDate}

📝 Message:
${data.message || 'No additional message'}

--------------------------------

Please contact me regarding this consultation request.

Sent from MediCare Home Website`

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`

    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      reset()
      setIsOpening(false)
      setSubmitted(true)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3500)
    }, 1000)
  }

  return (
    <section id="contact" className="bg-dark-navy py-16 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-blue/8 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-green/8 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_rgba(29,78,216,0.05)_0%,_transparent_60%)]" />

      {/* Toast notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-[999] flex items-center gap-3 px-6 py-4 bg-[#25D366] text-white rounded-2xl shadow-[0_8px_32px_rgba(37,211,102,0.4)] font-semibold text-sm"
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            Redirecting to WhatsApp...
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold text-primary-green tracking-widest uppercase bg-primary-green/10 rounded-full border border-primary-green/20 mb-4">
            Contact Us
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 tracking-tight">
            Need Medical Assistance{' '}
            <span className="bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">
              Right Now?
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Our team is standing by 24/7. Reach out through any channel and we will respond immediately.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Emergency banner */}
            <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl mb-8">
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <div>
                <p className="text-sm font-bold text-white">Medical Emergency?</p>
                <p className="text-xs text-white/60">Call immediately — we respond in under 15 minutes.</p>
              </div>
              <a href="tel:+918307374806" className="ml-auto px-4 py-2 bg-red-500 text-white text-xs font-bold rounded-xl hover:bg-red-400 transition-colors flex-shrink-0">
                Call Now
              </a>
            </div>

            <div className="space-y-4 mb-10">
              {contactInfo.map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-5 p-5 bg-white/4 border border-white/8 rounded-2xl hover:bg-white/8 hover:border-white/16 transition-all duration-200 group"
                >
                  <div className={`w-12 h-12 ${info.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <info.icon className={`w-6 h-6 ${info.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 font-medium mb-0.5">{info.label}</p>
                    <p className="text-base font-semibold text-white">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Hours */}
            <div className="p-6 bg-white/4 border border-white/8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary-green" />
                <p className="text-white font-bold">Service Hours</p>
              </div>
              <div className="space-y-2">
                {[
                  ['Emergency Response', '24 hours / 365 days'],
                  ['Doctor Visits', '6:00 AM — 11:00 PM'],
                  ['Lab Sample Collection', '7:00 AM — 9:00 PM'],
                  ['Appointments', 'Anytime via form or call'],
                ].map(([label, time], i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-white/50">{label}</span>
                    <span className="text-sm font-medium text-white/80">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-5 sm:p-8 shadow-[0_24px_64px_rgba(0,0,0,0.3)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary-blue/8 rounded-xl flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary">Book a Consultation</h3>
                <p className="text-sm text-text-secondary">We&apos;ll confirm via WhatsApp within minutes.</p>
              </div>
            </div>

            {/* WhatsApp badge */}
            <div className="flex items-center gap-2 px-3 py-2 bg-[#25D366]/8 border border-[#25D366]/20 rounded-xl mb-5">
              <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
              <p className="text-xs text-[#128C7E] font-medium">
                Your request will be sent directly to our WhatsApp.
              </p>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-[#25D366]" />
                </div>
                <h4 className="text-xl font-bold text-text-primary mb-2">WhatsApp Opened!</h4>
                <p className="text-text-secondary text-sm mb-5">
                  Your consultation request has been sent to our team. We&apos;ll respond within minutes.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 text-sm font-bold text-primary-blue border-2 border-primary-blue/20 rounded-btn hover:bg-primary-blue/5 transition-colors"
                >
                  Submit Another Request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(handleConsultationSubmit)} className="space-y-4" noValidate>
                {/* Full Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wide">
                      Full Name *
                    </label>
                    <input
                      {...register('fullName', {
                        required: 'Please enter your full name.',
                        minLength: { value: 2, message: 'Please enter your full name.' },
                      })}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 bg-section-bg border rounded-xl text-sm text-text-primary placeholder-text-secondary/60 focus:outline-none focus:ring-2 transition-all ${
                        errors.fullName
                          ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                          : 'border-border-color focus:border-primary-blue focus:ring-primary-blue/10'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wide">
                      Phone *
                    </label>
                    <input
                      {...register('phone', {
                        required: 'Please enter a valid phone number.',
                        pattern: {
                          value: /^[+\d][\d\s\-()]{7,}$/,
                          message: 'Please enter a valid phone number.',
                        },
                      })}
                      placeholder="+91 83073 74806"
                      type="tel"
                      className={`w-full px-4 py-3 bg-section-bg border rounded-xl text-sm text-text-primary placeholder-text-secondary/60 focus:outline-none focus:ring-2 transition-all ${
                        errors.phone
                          ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                          : 'border-border-color focus:border-primary-blue focus:ring-primary-blue/10'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wide">
                    Email <span className="text-text-secondary/50 normal-case font-normal">(optional)</span>
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-section-bg border border-border-color rounded-xl text-sm text-text-primary placeholder-text-secondary/60 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/10 transition-all"
                  />
                </div>

                {/* Service + Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wide">
                      Service Needed *
                    </label>
                    <select
                      {...register('service', {
                        required: 'Please select a service.',
                      })}
                      className={`w-full px-4 py-3 bg-section-bg border rounded-xl text-sm text-text-primary focus:outline-none focus:ring-2 transition-all ${
                        errors.service
                          ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                          : 'border-border-color focus:border-primary-blue focus:ring-primary-blue/10'
                      }`}
                    >
                      <option value="">Select service...</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        {errors.service.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wide">
                      Preferred Date *
                    </label>
                    <input
                      {...register('preferredDate', {
                        required: 'Please choose a preferred date.',
                      })}
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      className={`w-full px-4 py-3 bg-section-bg border rounded-xl text-sm text-text-primary focus:outline-none focus:ring-2 transition-all ${
                        errors.preferredDate
                          ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
                          : 'border-border-color focus:border-primary-blue focus:ring-primary-blue/10'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        {errors.preferredDate.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-text-secondary mb-1.5 uppercase tracking-wide">
                    Message <span className="text-text-secondary/50 normal-case font-normal">(optional)</span>
                  </label>
                  <textarea
                    {...register('message')}
                    rows={3}
                    placeholder="Describe your medical needs or any specific requirements..."
                    className="w-full px-4 py-3 bg-section-bg border border-border-color rounded-xl text-sm text-text-primary placeholder-text-secondary/60 focus:outline-none focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/10 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <motion.button
                  type="submit"
                  disabled={isOpening}
                  whileHover={!isOpening ? { scale: 1.02, boxShadow: '0 8px 32px rgba(37,211,102,0.35)' } : {}}
                  whileTap={!isOpening ? { scale: 0.98 } : {}}
                  className="w-full py-4 bg-gradient-to-r from-primary-blue to-[#25D366] text-white font-bold text-base rounded-btn shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 disabled:opacity-80"
                >
                  {isOpening ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Book Consultation
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-center text-text-secondary">
                  Submitting opens WhatsApp with your details pre-filled. For emergencies, call directly 24/7.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
