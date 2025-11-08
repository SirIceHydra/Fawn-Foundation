import { useEffect, useRef, useState } from 'react'
import './Footer.css'

// Image assets
const imgLogo = '/logo.png'

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <footer 
      id="contact" 
      className={`footer ${isVisible ? 'visible' : ''}`}
      ref={ref}
    >
      <div className="container">
        <div className="footer-bottom">
          <p>Fawn Foundation &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

