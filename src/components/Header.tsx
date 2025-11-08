import { useState } from 'react'
import './Header.css'

// Image assets
const imgLogo = '/logo.png'

interface HeaderProps {
  isScrolled: boolean
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          {/* Logo */}
          <div className="header-logo">
            <img src={imgLogo} alt="Fawn Foundation" />
          </div>
          
          {/* Navigation */}
          <nav className={`header-nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#mission" onClick={() => setIsMobileMenuOpen(false)}>
              Our Mission
            </a>
            <a href="#funding" onClick={() => setIsMobileMenuOpen(false)}>
              Funding
            </a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </a>
          </nav>

          {/* Contact Button */}
          <a href="#contact" className="header-donate-btn">
            Contact Us
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
