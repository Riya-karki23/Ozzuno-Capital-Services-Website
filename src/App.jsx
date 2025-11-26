import React from 'react'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import Footer from './pages/Footer'

const App = () => {
  return (
     <div>
      <Navbar />
      <Home />
     <CaseStudy/>
     <Footer/>
    </div>
  )
}

export default App