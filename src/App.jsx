import React from "react"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import How from "./components/How"

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
    </main>

    <section className="section-how">
      <How />
    </section>
   </React.Fragment>
  )
}

export default App
