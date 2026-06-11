'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How quickly can you arrive after a call?',
    answer:
      'Our average response time is 15 minutes for urgent requests. In most service areas, a qualified medical professional will be at your door within 15–20 minutes of your call. Emergency situations are prioritized with even faster dispatch.',
  },
  {
    question: 'What areas do you cover?',
    answer:
      'We cover 30+ localities across the metropolitan area including Central City, North, South, East, and West zones, suburbs, and surrounding towns. Call us to confirm availability in your specific area.',
  },
  {
    question: 'Are services available 24/7, including holidays?',
    answer:
      'Absolutely. Our services are available 365 days a year, 24 hours a day — including weekends, public holidays, and festival seasons. Medical emergencies don\'t follow a schedule, and neither do we.',
  },
  {
    question: 'Can elderly patients receive specialized home care?',
    answer:
      'Yes. Our elderly care program is designed specifically for senior citizens. It includes regular health monitoring, medication management, physiotherapy, companionship, and specialized support for conditions like dementia, diabetes, and mobility issues.',
  },
  {
    question: 'How can I book an appointment or request emergency care?',
    answer:
      'You can book through our website\'s appointment form, call our hotline directly, or send us a WhatsApp message. For emergencies, calling is the fastest method. Our team responds immediately and dispatches the right professional.',
  },
  {
    question: 'Do you offer emergency medical services at home?',
    answer:
      'Yes. We provide on-site emergency medical response including cardiac support, acute illness management, injury assessment, IV therapy, oxygen administration, and emergency stabilization — all delivered at your home while coordinating hospital transfer if needed.',
  },
]

function FAQItem({ item, index }: { item: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border border-border-color rounded-2xl overflow-hidden bg-white hover:border-primary-blue/30 transition-colors"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-7 py-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className="text-base font-bold text-text-primary">{item.question}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className={`w-8 h-8 flex-shrink-0 rounded-xl flex items-center justify-center transition-colors ${
            open ? 'bg-primary-blue text-white' : 'bg-section-bg text-text-secondary'
          }`}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-7 pb-6">
              <div className="h-px bg-border-color mb-5" />
              <p className="text-[15px] text-text-secondary leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQSection() {
  return (
    <section id="faq" className="bg-white py-16 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold text-primary-blue tracking-widest uppercase bg-primary-blue/8 rounded-full border border-primary-blue/15 mb-4">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-5 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary max-w-lg mx-auto">
            Everything you need to know about our home healthcare services.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} item={faq} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center p-8 bg-gradient-to-br from-primary-blue/5 to-primary-green/5 rounded-3xl border border-border-color"
        >
          <p className="text-base font-semibold text-text-primary mb-2">Still have questions?</p>
          <p className="text-text-secondary text-sm mb-5">Our team is available 24/7 to help you with any queries.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+918307374806" className="px-6 py-3 bg-primary-blue text-white font-bold text-sm rounded-btn shadow-md hover:shadow-glow-blue transition-all hover:scale-105">
              Call Us Now
            </a>
            <a href="https://wa.me/918307374806" className="px-6 py-3 bg-[#25D366] text-white font-bold text-sm rounded-btn shadow-md hover:scale-105 transition-all">
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
