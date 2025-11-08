import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Programs from './components/Programs'
import Services from './components/Services'
import CompanyLogos from './components/CompanyLogos'
import Fundraising from './components/Fundraising'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <Programs />
        <Services />
        <CompanyLogos />
        <Fundraising />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App

