import './Hero.css'

// Image assets
const imgBackgroundImage = '/antihumantrafficking.png'
const imgEllipse1 = '/09a91d762fe28cb47c6eb07b319efeb6ca4a66ee.svg'

const Hero = () => {
  return (
    <section id="home" className="hero section-hero">
      {/* Background Image */}
      <div className="hero-background">
        <div className="hero-background-overlay">
          <img 
            src={imgBackgroundImage} 
            alt="" 
            className="hero-background-image"
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Decorative Ellipse */}
      <div className="hero-ellipse">
        <img src={imgEllipse1} alt="" aria-hidden="true" />
      </div>

      {/* Main Content */}
      <div className="hero-content-wrapper">
        <div className="container">
          {/* Text Background Overlay */}
          <div className="hero-text-overlay">
            {/* Heading */}
            <h1 className="hero-title">
              <span>Fawn Foundation</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Growing compassion & nurturing lives
            </p>

            {/* Theme Verse */}
            <p className="hero-verse">
              "Consider the lilies of the field..." — Matthew 6:28-30
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta-buttons">
              <a href="#mission" className="btn-donate">
                Our Mission
              </a>
              <a href="#contact" className="btn-learn-more">
                Get Involved
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
