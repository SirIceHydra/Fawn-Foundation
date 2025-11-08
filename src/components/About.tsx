import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Us</h2>
            <p className="about-description">
              We're passionate about creating beautiful, functional web experiences
              that make a difference. Our team combines creativity with technical
              expertise to deliver solutions that exceed expectations.
            </p>
            <p className="about-description">
              Built with React and TypeScript, this template provides a solid
              foundation for your next project. It's modern, fast, and ready to
              customize to your needs.
            </p>
            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">100+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Clients</div>
              </div>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-graphic">
              <div className="graphic-circle circle-1"></div>
              <div className="graphic-circle circle-2"></div>
              <div className="graphic-circle circle-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About


