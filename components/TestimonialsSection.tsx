'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    relation: 'Daughter of patient',
    avatar: 'PS',
    rating: 5,
    review: 'The team arrived within 12 minutes for my father\'s emergency. Their calm professionalism during a stressful night gave our family tremendous reassurance. Exceptional service.',
    avatarBg: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Rajesh Kumar',
    relation: 'Patient (Elderly Care)',
    avatar: 'RK',
    rating: 5,
    review: 'I\'ve been on their elderly care program for 6 months. The nurses are caring, punctual, and incredibly thorough. I feel genuinely looked after — not just medically managed.',
    avatarBg: 'from-green-400 to-green-600',
  },
  {
    name: 'Meena Patel',
    relation: 'Patient (IV Therapy)',
    avatar: 'MP',
    rating: 5,
    review: 'Needed IV hydration at midnight due to severe dehydration. They came, administered the drip professionally, and stayed until I was stabilized. True round-the-clock care.',
    avatarBg: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Ahmed Hassan',
    relation: 'Spouse of patient',
    avatar: 'AH',
    rating: 5,
    review: 'Post-surgery wound dressing for my wife was handled with such precision and care. Clean, professional, and completely stress-free. Would recommend to every family.',
    avatarBg: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Sunita Reddy',
    relation: 'Patient (Lab Tests)',
    avatar: 'SR',
    rating: 5,
    review: 'Getting lab tests done at home is a game changer. The phlebotomist was gentle, quick, and results came back digitally the same day. Truly world-class service.',
    avatarBg: 'from-pink-400 to-rose-500',
  },
  {
    name: 'Dr. Vikram Nair',
    relation: 'Referred patient',
    avatar: 'VN',
    rating: 5,
    review: 'As a physician myself, I\'m very particular about medical care. MediCare Home exceeded my expectations — clinical protocols, sterile procedures, and compassionate delivery.',
    avatarBg: 'from-teal-400 to-cyan-500',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-section-bg py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold text-primary-blue tracking-widest uppercase bg-primary-blue/8 rounded-full border border-primary-blue/15 mb-4">
            Patient Reviews
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-5 tracking-tight">
            What Our Patients Say
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Trusted by hundreds of families across the city.
          </p>
        </motion.div>

        {/* Rating Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white border border-border-color rounded-2xl shadow-card px-5 sm:px-8 py-6 flex flex-wrap items-center gap-4 sm:gap-8">
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-extrabold text-text-primary">5.0</p>
              <div className="flex items-center gap-1 justify-center mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-text-secondary mt-1">Overall Rating</p>
            </div>
            <div className="w-px h-16 bg-border-color hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-text-primary">500+</p>
              <p className="text-sm text-text-secondary">Google Reviews</p>
            </div>
            <div className="w-px h-16 bg-border-color hidden sm:block" />
            <div className="text-center">
              <p className="text-2xl font-bold text-text-primary">99%</p>
              <p className="text-sm text-text-secondary">Would Recommend</p>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(15,23,42,0.10)' }}
              className="bg-white rounded-3xl p-5 sm:p-7 border border-border-color shadow-card transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="w-10 h-10 bg-primary-blue/8 rounded-xl flex items-center justify-center mb-5">
                <Quote className="w-5 h-5 text-primary-blue" />
              </div>

              {/* Review */}
              <p className="text-[15px] text-text-secondary leading-relaxed mb-6 flex-grow">
                &ldquo;{t.review}&rdquo;
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border-color">
                <div className={`w-10 h-10 bg-gradient-to-br ${t.avatarBg} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary">{t.name}</p>
                  <p className="text-xs text-text-secondary">{t.relation}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
