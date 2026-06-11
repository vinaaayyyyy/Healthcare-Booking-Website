import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MediCare Home — 24/7 Emergency Home Healthcare Services',
  description:
    'Expert medical care at your doorstep. Professional doctors, nurses, elderly care specialists, IV therapy, lab tests, and emergency medical support — available 24/7. Fast 15-minute response time.',
  keywords: [
    'home healthcare', 'home doctor visit', 'emergency medical care', 'home nursing',
    'elderly care at home', 'IV therapy at home', 'home lab tests', 'home X-ray',
    '24/7 medical care', 'home healthcare services'
  ],
  authors: [{ name: 'MediCare Home' }],
  openGraph: {
    title: 'MediCare Home — 24/7 Emergency Home Healthcare Services',
    description: 'Expert medical care delivered to your doorstep. Available 24/7 with 15-minute emergency response.',
    type: 'website',
    locale: 'en_IN',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased text-text-primary bg-white">
        {children}
      </body>
    </html>
  )
}
