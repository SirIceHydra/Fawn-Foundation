import { useEffect, useRef, useState } from 'react'
import './Programs.css'

const Programs = () => {
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
      id="mission" 
      className={`programs ${isVisible ? 'visible' : ''}`}
      ref={ref}
    >
      <div className="container">
        <div className="programs-content">
          {/* Theme Verse Header */}
          <div className="theme-verse-header">
            <p className="theme-verse-text">
              "Consider the lilies of the field, how they grow; they toil not, neither do they spin: And yet I say unto you, That even Solomon in all his glory was not arrayed like one of these."
            </p>
            <p className="theme-verse-reference">— Matthew 6:28-30</p>
          </div>

          {/* Mission Statement */}
          <div className="mission-statement">
            <p className="mission-text">
              The Fawn Foundation is filling in the roadmap for a journey to freedom, lighting the path ahead through love for others, respect, and showing people the dignity that they deserve.
            </p>
          </div>

          {/* Quote Section */}
          <div className="quote-section">
            <blockquote className="quote-text">
              To paraphrase Robert F. Kennedy, at the Fawn Foundation we believe that each time we stand up for an ideal, or act to improve the lot of others, or strike out against injustice, we send forth a tiny ripple of hope, and daring those ripples build a current which can sweep down the mightiest walls of oppression and resistance. The energy, the faith, the devotion which we bring to this endeavour will light our country and all who serve it – and the glow from that fire can truly light the world.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs

