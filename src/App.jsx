import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import How from "./components/How"
import Featured from "./components/Featured"
import Meals from "./components/Meals"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import CTA from "./components/CTA"
import Footer from "./components/Footer"

function App() {

  return (
   <React.Fragment>
      <Navbar /> 
    <main>
    <section className="section-hero">
      <Hero />
    </section> 

    <section className="section-featured">
      <Featured />
    </section>

    <section className="section-how" id="how">
      <How />
    </section> 
    
    <section className="section-meals" id="meals">
      <Meals />
    </section>

    <section className="section-testimonials" id="testimonials">
      <Testimonials />
    </section>

    <section className="section-pricing" id="pricing">
      <Pricing />
    </section>

    <section className="section-cta" id="cta">
      <CTA />
    </section>
    </main>
    <Footer />
   </React.Fragment>
  )
}

export default App
