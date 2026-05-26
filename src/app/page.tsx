import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Fleet } from '@/components/Fleet'
import { Pricing } from '@/components/Pricing'
import { UseCases } from '@/components/UseCases'
import { WhyUs } from '@/components/WhyUs'
import { Reviews } from '@/components/Reviews'
import { Contacts } from '@/components/Contacts'
import { CtaBanner } from '@/components/CtaBanner'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Fleet />
        <Pricing />
        <UseCases />
        <WhyUs />
        <Reviews />
        <Contacts />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
