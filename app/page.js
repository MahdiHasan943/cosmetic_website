// npm run export

import About from "@/components/About";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Review from "@/components/Review";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="sm:px-16  px-6">
      

      <Hero />
      <Review />
      <Services />
      <Booking />
      <About />
      <Faq />
      <Contact/>
     <Footer/>
    </main>
  )
}
