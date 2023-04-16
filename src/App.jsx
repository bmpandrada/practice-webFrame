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

    <section className="section-how">
      <How />
    </section> 
    
    <section className="section-meals">
      <Meals />
    </section>

    <section className="section-testimonials">
      <Testimonials />
    </section>

    <section className="section-pricing">
      <Pricing />
    </section>

    <section className="section-cta">
      <CTA />
    </section>
    </main>
    <Footer />
   </React.Fragment>
  )
}

export default App
