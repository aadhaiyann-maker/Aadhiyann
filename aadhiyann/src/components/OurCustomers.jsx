import { useState } from 'react';

const OurCustomers = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const customers = [
    {
      name: "Apex Laboratories",
      logo: "💊",
      testimonial: "Aadhiyann provided excellent infrastructure solutions for our pharmaceutical manufacturing facility. Their expertise in pharma construction is exceptional.",
      project: "Pharmaceutical Facility"
    },
    {
      name: "Esjay Pharma",
      logo: "🏭",
      testimonial: "Professional team with deep understanding of pharmaceutical industry requirements. Our research facility was completed on time and exceeded expectations.",
      project: "Research Facility"
    },
    {
      name: "Evergreen Pharma Congo",
      logo: "🌍",
      testimonial: "Outstanding construction quality for our pharmaceutical plant in Congo. Aadhiyann understands international standards and local requirements perfectly.",
      project: "Pharmaceutical Plant"
    },
    {
      name: "OrBion Pharmaceutical",
      logo: "🔬",
      testimonial: "Their attention to detail in pharmaceutical facility construction is remarkable. Our biotech lab meets all regulatory requirements.",
      project: "Biotech Laboratory"
    },
    {
      name: "Crescent R & D",
      logo: "🧪",
      testimonial: "Excellent execution of our R&D facility. Aadhiyann's team understands the complex needs of pharmaceutical research infrastructure.",
      project: "R&D Facility"
    },
    {
      name: "Kausikh Therapeutic",
      logo: "⚕️",
      testimonial: "Professional approach to therapeutic manufacturing facility construction. Quality workmanship and timely project delivery.",
      project: "Manufacturing Facility"
    },
    {
      name: "Magpharm Algeria",
      logo: "🏥",
      testimonial: "Successfully delivered our pharmaceutical facility in Algeria with international standards. Great team with global experience.",
      project: "Pharmaceutical Facility"
    },
    {
      name: "Heal India Laboratories",
      logo: "💉",
      testimonial: "Outstanding construction of our laboratory facilities. Aadhiyann understands the specific requirements of pharmaceutical testing labs.",
      project: "Testing Laboratory"
    },
    {
      name: "Caplin Group",
      logo: "📦",
      testimonial: "Excellent infrastructure solutions for our pharmaceutical operations. Their commitment to quality and safety is impressive.",
      project: "Pharmaceutical Operations"
    },
    {
      name: "Unilink Pharma",
      logo: "🤝",
      testimonial: "Professional team that delivered our pharmaceutical distribution center on schedule. Great understanding of industry requirements.",
      project: "Distribution Center"
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
                  <div className="customer-logo">
                    {customer.logo}
                  </div>
                  <span className="customer-name">{customer.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials section commented out */}
          {/* <div className="testimonials-section">
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
          </div> */}
        </div>

        <div className="stats-section">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">140+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCustomers;
