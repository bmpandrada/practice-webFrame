import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import How from "./components/How"
import Featured from "./components/Featured"
import Meals from "./components/Meals"

function App() {

  return (
   <React.Fragment>
    <header className="header"> 
    <React.Fragment> 
      <Navbar />
    </React.Fragment>
    </header>
    
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
    </main>
   </React.Fragment>
  )
}

export default App
