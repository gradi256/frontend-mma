import { FeaturedCategorie } from "@/components/public/home/FeaturedCategorie"
import { FeaturedCorePricing } from "@/components/public/home/FeaturedCorePricing"
import { FeaturedCtaEnded } from "@/components/public/home/FeaturedCtaEnded"
import { FeaturedFaq } from "@/components/public/home/FeaturedFaq"
import { FeaturedHowItWork } from "@/components/public/home/FeaturedHowItWork"
import { Hero } from "@/components/public/home/Hero"
import { Footer } from "@/components/shared/Footer"
import { Navbar } from "@/components/shared/Navbar"

export const Home = () => {
  return (
    <div>
      <Navbar />
       <Hero />
      <FeaturedCategorie />
      <FeaturedHowItWork />
      <FeaturedCorePricing />
      <FeaturedFaq />
      <FeaturedCtaEnded />
      <Footer />
    </div>
  )
}
