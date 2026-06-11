'use client'

import { motion } from 'framer-motion'
import { Cross, Phone, MessageCircle, Mail, MapPin, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react'

const footerLinks = {
  company: {
    title: 'Company',
    links: ['About Us', 'Our Team', 'Careers', 'News & Updates', 'Partner With Us'],
  },
  services: {
    title: 'Services',
    links: ['Home Doctor Visit', 'Elderly Care', 'IV Therapy', 'Lab Tests At Home', 'Home X-Ray', 'Surgical Dressing'],
  },
  coverage: {
    title: 'Coverage Areas',
    links: ['Central City', 'North Zone', 'East Zone', 'West Zone', 'South Zone', 'Suburbs & Towns'],
  },
  contact: {
    title: 'Contact',
    items: [
      { icon: Phone, text: '+91 83073 74806', href: 'tel:+918307374806' },
      { icon: MessageCircle, text: 'WhatsApp Us', href: 'https://wa.me/918307374806' },
      { icon: Mail, text: 'care@medicarehome.in', href: 'mailto:care@medicarehome.in' },
      { icon: MapPin, text: '42 Medical Centre, Bangalore 560001', href: '#' },
    ],
  },
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-navy">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-b border-white/8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-green rounded-xl flex items-center justify-center">
                <Cross className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <span className="text-lg font-bold text-white">MediCare</span>
                <span className="text-lg font-bold text-primary-green">Home</span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-5">
              Professional home healthcare and emergency medical services — available 24/7, delivered with clinical excellence.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-9 h-9 bg-white/6 hover:bg-white/12 border border-white/8 rounded-xl flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4 text-white/60" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">{footerLinks.company.title}</h4>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm text-white/50 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">{footerLinks.services.title}</h4>
            <ul className="space-y-3">
              {footerLinks.services.links.map((link, i) => (
                <li key={i}>
                  <a href="#services" className="text-sm text-white/50 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              {footerLinks.contact.items.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="flex items-start gap-3 group">
                    <div className="w-8 h-8 bg-white/6 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-blue/20 transition-colors">
                      <item.icon className="w-3.5 h-3.5 text-white/60 group-hover:text-primary-blue transition-colors" />
                    </div>
                    <span className="text-sm text-white/50 group-hover:text-white transition-colors leading-tight pt-1">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} MediCareHome. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
