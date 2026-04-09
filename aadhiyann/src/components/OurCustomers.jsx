import { useState } from 'react';

const OurCustomers = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const customers = [
    {
      name: "TechCorp Solutions",
      logo: "🏢",
      testimonial: "Aadhiyann Infratech delivered exceptional quality on our commercial project. Their attention to detail and timeline management were outstanding.",
      project: "Commercial Complex"
    },
    {
      name: "Green Homes Realty",
      logo: "🏘️",
      testimonial: "We've partnered with Aadhiyann for multiple residential projects. Their commitment to sustainable building practices is impressive.",
      project: "Residential Township"
    },
    {
      name: "Industrial Park Ltd",
      logo: "🏭",
      testimonial: "The industrial facility they constructed exceeded our expectations. Professional team, excellent execution, and on-time delivery.",
      project: "Industrial Facility"
    },
    {
      name: "EggFarm Enterprises",
      logo: "🥚",
      testimonial: "Aadhiyann designed and built our state-of-the-art egg processing facility. Their expertise in specialized construction is unmatched.",
      project: "Egg Processing Plant"
    },
    {
      name: "Metro Developers",
      logo: "🏗️",
      testimonial: "Outstanding construction quality and project management. They understand the complexities of large-scale urban development.",
      project: "Mixed-Use Development"
    },
    {
      name: "AgriTech Solutions",
      logo: "🌾",
      testimonial: "Their agricultural construction projects demonstrate deep understanding of modern farming infrastructure requirements.",
      project: "Agricultural Complex"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % customers.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + customers.length) % customers.length);
  };

  return (
    <section id="customers" className="section">
      <div className="container">
        <h2>Our Valued Customers</h2>
        <p>Trusted by leading companies across various industries</p>
        
        <div className="customers-grid">
          <div className="customer-logos">
            <h3>Our Partners</h3>
            <div className="logos-grid">
              {customers.map((customer, index) => (
                <div key={index} className="customer-logo-item">
                  <div className="customer-logo">{customer.logo}</div>
                  <span className="customer-name">{customer.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="testimonials-section">
            <h3>What Our Customers Say</h3>
            <div className="testimonial-container">
              <button className="testimonial-nav prev" onClick={prevTestimonial}>
                ‹
              </button>
              
              <div className="testimonial-content">
                <div className="customer-avatar">
                  {customers[activeTestimonial].logo}
                </div>
                <blockquote className="testimonial-text">
                  "{customers[activeTestimonial].testimonial}"
                </blockquote>
                <div className="testimonial-author">
                  <strong>{customers[activeTestimonial].name}</strong>
                  <span className="project-type">{customers[activeTestimonial].project}</span>
                </div>
              </div>

              <button className="testimonial-nav next" onClick={nextTestimonial}>
                ›
              </button>
            </div>
            
            <div className="testimonial-dots">
              {customers.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCustomers;
