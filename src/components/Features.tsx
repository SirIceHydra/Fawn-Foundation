import './Features.css'

interface Feature {
  icon: string
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: '⚡',
    title: 'Fast Performance',
    description: 'Built with modern tools and optimized for speed. Your users will love the lightning-fast experience.'
  },
  {
    icon: '🎨',
    title: 'Beautiful Design',
    description: 'Carefully crafted UI components with attention to detail. Modern, clean, and responsive design.'
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Built with security best practices in mind. Your data and users are protected.'
  },
  {
    icon: '📱',
    title: 'Fully Responsive',
    description: 'Looks great on all devices. Mobile-first approach ensures perfect experience everywhere.'
  },
  {
    icon: '🚀',
    title: 'Easy to Deploy',
    description: 'Simple deployment process. Get your site live in minutes with our streamlined workflow.'
  },
  {
    icon: '🛠️',
    title: 'Customizable',
    description: 'Fully customizable to match your brand. Easy to modify and extend to your needs.'
  }
]

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Features</h2>
          <p className="section-subtitle">
            Everything you need to build amazing web experiences
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features


