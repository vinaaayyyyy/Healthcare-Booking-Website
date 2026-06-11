import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#22C55E',
        'primary-blue': '#1D4ED8',
        'dark-navy': '#0F172A',
        'section-bg': '#F8FAFC',
        'border-color': '#E2E8F0',
        'text-primary': '#0F172A',
        'text-secondary': '#64748B',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '1400px',
        '7xl': '1280px',
      },
      borderRadius: {
        '4xl': '32px',
        '3xl': '24px',
        'btn': '14px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(15,23,42,0.06)',
        'card-hover': '0 12px 48px rgba(15,23,42,0.12)',
        'glow-green': '0 0 40px rgba(34,197,94,0.25)',
        'glow-blue': '0 0 40px rgba(29,78,216,0.25)',
        'glass': '0 8px 32px rgba(15,23,42,0.08)',
      },
      backdropBlur: {
        'xs': '4px',
      },
    },
  },
  plugins: [],
}

export default config
