import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import TrustBar from '@/components/TrustBar'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'
import SuccessStories from '@/components/SuccessStories'
import StatsSection from '@/components/StatsSection'
import CoverageSection from '@/components/CoverageSection'
import DoctorProfile from '@/components/DoctorProfile'
import ProcessSection from '@/components/ProcessSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyChooseUs />
      <SuccessStories />
      <StatsSection />
      <CoverageSection />
      <DoctorProfile />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
