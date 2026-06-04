import Hero from '@/components/home/Hero'
import Stats from '@/components/home/Stats'
import ServicesSection from '@/components/home/ServicesSection'
import HowItWorks from '@/components/home/HowItWorks'
import Tools from '@/components/home/Tools'
import CaseStudiesSection from '@/components/home/CaseStudiesSection'
import Reviews from '@/components/home/Reviews'
import CTASection from '@/components/home/CTASection'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <HowItWorks />
      <Tools />
      <CaseStudiesSection />
      <Reviews />
      <CTASection />
    </>
  )
}
