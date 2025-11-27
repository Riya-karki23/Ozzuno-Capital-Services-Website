import React from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import Footer from './pages/Footer'
import About from './pages/About'
import Level2 from './pages/Level2'
import Level3 from './pages/Level3'
import Level4 from './pages/Level4'



const App = () => {
  return (
     <div>
      <Navbar />
       <section id="home">
        <Home />
      </section>

     
      
     <section id="about">
      <About />
      </section>

  
       <section id="services">
      <Level2 />
      </section>

      <Level3/>
      <Level4/>
      
      <section id="case">
      <CaseStudy />
      </section>
     <section id="contact">
      <Footer />
      </section> 
    </div>
  )
}

export default App