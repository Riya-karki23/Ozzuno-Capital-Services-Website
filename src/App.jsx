import React from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import Footer from './pages/Footer'
import About from './pages/About'
import Cards from './pages/Cards'
import CapitalMarkets from './pages/CapitalMarkets'
import DebtStructuredFinance from './pages/DebtStructuredFinance'
import MAStrategicExits from './pages/MAStrategicExits'
import PrivateCapitalGlobalLiquidity from './pages/PrivateCapitalGlobalLiquidity'

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
      <Cards />
      </section>

      <CapitalMarkets/>
      <DebtStructuredFinance/>
      <MAStrategicExits/>
      <PrivateCapitalGlobalLiquidity/>
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