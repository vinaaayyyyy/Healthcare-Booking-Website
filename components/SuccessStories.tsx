'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Tag } from 'lucide-react'

const stories = [
  {
    image: '/images/success-story-1.png',
    category: 'Elderly Care',
    categoryColor: 'text-primary-blue bg-primary-blue/8 border-primary-blue/15',
    title: 'Restoring Independence: Margaret\'s Journey Back to Health',
    description:
      'After a hip fracture, 78-year-old Margaret faced months of difficult recovery. Our dedicated care team provided daily physiotherapy, medication management, and emotional support — helping her walk independently within 10 weeks.',
    tag: 'Recovery Success',
  },
  {
    image: '/images/success-story-2.png',
    category: 'Emergency Response',
    categoryColor: 'text-red-600 bg-red-50 border-red-100',
    title: 'Critical Intervention: A Life Saved in 12 Minutes',
    description:
      'When Mr. Sharma experienced severe chest pain, our emergency team arrived in 12 minutes, administered critical care, and stabilized him before hospital transfer. Our rapid response made all the difference.',
    tag: 'Emergency Care',
  },
]

export default function SuccessStories() {
  return (
    <section className="bg-section-bg py-16 lg:py-32">
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
            Patient Stories
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-5 tracking-tight">
            Healthcare Excellence{' '}
            <span className="bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent">
              In Action
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-xl mx-auto">
            Real stories demonstrating exceptional patient outcomes and our unwavering commitment to care.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {stories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-[28px] overflow-hidden border border-border-color shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-navy/50 via-dark-navy/10 to-transparent" />
                {/* Category badge */}
                <div className="absolute top-5 left-5">
                  <span className={`px-3 py-1.5 text-xs font-bold rounded-full border ${story.categoryColor} backdrop-blur-sm bg-opacity-90`}>
                    {story.category}
                  </span>
                </div>
                {/* Tag */}
                <div className="absolute bottom-5 right-5 flex items-center gap-1.5 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-full">
                  <Tag className="w-3 h-3 text-text-secondary" />
                  <span className="text-xs font-semibold text-text-primary">{story.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-8">
                <h3 className="text-xl font-bold text-text-primary mb-3 leading-tight group-hover:text-primary-blue transition-colors">
                  {story.title}
                </h3>
                <p className="text-[15px] text-text-secondary leading-relaxed mb-6">
                  {story.description}
                </p>
                <div className="flex items-center gap-2 text-primary-blue font-semibold text-sm group-hover:gap-4 transition-all duration-200">
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
