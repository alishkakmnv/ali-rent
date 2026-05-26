import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import BentoGrid from "@/components/sections/BentoGrid"
import Catalog from "@/components/sections/Catalog"
import Calculator from "@/components/sections/Calculator"
import HowWeWork from "@/components/sections/HowWeWork"
import Advantages from "@/components/sections/Advantages"
import Cases from "@/components/sections/Cases"
import FAQ from "@/components/sections/FAQ"
import ContactForm from "@/components/sections/ContactForm"
import Footer from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BentoGrid />
        <Catalog />
        <Calculator />
        <HowWeWork />
        <Advantages />
        <Cases />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
