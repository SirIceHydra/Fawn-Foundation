import { useEffect, useRef, useState } from 'react'
import './Services.css'

const Services = () => {
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
    <section 
      id="funding" 
      className={`services ${isVisible ? 'visible' : ''}`}
      ref={ref}
    >
      <div className="container">
        <div className="funding-box">
          <h2 className="funding-title">Sustainable Funding Model</h2>
          <p className="funding-text">
            The Fawn Foundation is a beneficiary of Cirrus AI Pty Ltd.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services

