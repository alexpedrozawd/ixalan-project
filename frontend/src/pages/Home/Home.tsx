import { Navbar } from '@/components/Navbar/Navbar'
import { HeroSection } from '@/components/HeroSection/HeroSection'
import { NewsSection } from '@/components/NewsSection/NewsSection'
import { AboutSection } from '@/components/AboutSection/AboutSection'
import { Footer } from '@/components/Footer/Footer'

export function Home() {
  return (
    <>
      <Navbar activePage="home" />
      <main>
        <HeroSection />
        <NewsSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  )
}
