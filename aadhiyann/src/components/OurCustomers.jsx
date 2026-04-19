import { useState } from 'react';
import apexLogo from '../assets/logos/apex.png';
import accentLogo from '../assets/logos/accent.png';
import evergreenLogo from '../assets/logos/evergreen.png';
import orbionLogo from '../assets/logos/orbion.png';
import cresentLogo from '../assets/logos/cresent.png';
import kausikhLogo from '../assets/logos/kausikh.jpg';
import magpharmLogo from '../assets/logos/magpharm.jpg';
import healLogo from '../assets/logos/heal.png';
import caplinLogo from '../assets/logos/caplin.png';
import unilinkLogo from '../assets/logos/unilink.jpg';
import a2zLogo from '../assets/logos/a2z.jpg';
import eastwestLogo from '../assets/logos/eastwest.jpg';
import jandmLogo from '../assets/logos/jandm.jpg';
import madrasLogo from '../assets/logos/madras.png';
import marketLogo from '../assets/logos/market.png';
import medissiLogo from '../assets/logos/medissi.png';
import megasysLogo from '../assets/logos/megasys.jpg';
import safetabLogo from '../assets/logos/safetab.jpg';
import saimirraLogo from '../assets/logos/saimirra.jpg';
import seigenLogo from '../assets/logos/seigen.jpg';
import sjpLogo from '../assets/logos/sjp.png';
import skyecLogo from '../assets/logos/skyec.jpg';
import softgelLogo from '../assets/logos/softgel.jpg';
import stridesLogo from '../assets/logos/strides.jpg';
import sunbeamLogo from '../assets/logos/sunbeam.jpg';

const OurCustomers = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const customers = [
    {
      name: "",
      logo: apexLogo,
      testimonial: "Aadhiyann provided excellent infrastructure solutions for our pharmaceutical manufacturing facility. Their expertise in pharma construction is exceptional.",
      project: "Pharmaceutical Facility"
    },
    {
      name: "",
      logo: accentLogo,
      testimonial: "Professional team with deep understanding of pharmaceutical industry requirements. Our research facility was completed on time and exceeded expectations.",
      project: "Research Facility"
    },
    {
      name: "",
      logo: evergreenLogo,
      testimonial: "Outstanding construction quality for our pharmaceutical plant in Congo. Aadhiyann understands international standards and local requirements perfectly.",
      project: "Pharmaceutical Plant"
    },
    {
      name: "",
      logo: orbionLogo,
      testimonial: "Their attention to detail in pharmaceutical facility construction is remarkable. Our biotech lab meets all regulatory requirements.",
      project: "Biotech Laboratory"
    },
    {
      name: "",
      logo: cresentLogo,
      testimonial: "Excellent execution of our R&D facility. Aadhiyann's team understands the complex needs of pharmaceutical research infrastructure.",
      project: "R&D Facility"
    },
    {
      name: "",
      logo: kausikhLogo,
      testimonial: "Professional approach to therapeutic manufacturing facility construction. Quality workmanship and timely project delivery.",
      project: "Manufacturing Facility"
    },
    {
      name: "",
      logo: magpharmLogo,
      testimonial: "Successfully delivered our pharmaceutical facility in Algeria with international standards. Great team with global experience.",
      project: "Pharmaceutical Facility"
    },
    {
      name: "",
      logo: healLogo,
      testimonial: "Outstanding construction of our laboratory facilities. Aadhiyann understands the specific requirements of pharmaceutical testing labs.",
      project: "Testing Laboratory"
    },
    {
      name: "",
      logo: caplinLogo,
      testimonial: "Excellent infrastructure solutions for our pharmaceutical operations. Their commitment to quality and safety is impressive.",
      project: "Pharmaceutical Operations"
    },
    {
      name: "",
      logo: unilinkLogo,
      testimonial: "Professional team that delivered our pharmaceutical distribution center on schedule. Great understanding of industry requirements.",
      project: "Distribution Center"
    },
    {
      name: "",
      logo: a2zLogo,
      testimonial: "Professional team with deep understanding of pharmaceutical industry requirements. Our research facility was completed on time and exceeded expectations.",
      project: "Research Facility"
    },
    {
      name: "",
      logo: eastwestLogo,
      testimonial: "Successfully delivered our pharmaceutical facility with international standards. Great team with global experience.",
      project: "Pharmaceutical Facility"
    },
    {
      name: "",
      logo: jandmLogo,
      testimonial: "Excellent infrastructure solutions for our pharmaceutical operations. Their commitment to quality and safety is impressive.",
      project: "Pharmaceutical Operations"
    },
    {
      name: "",
      logo: madrasLogo,
      testimonial: "Outstanding construction of our laboratory facilities. Aadhiyann understands the specific requirements of pharmaceutical testing labs.",
      project: "Testing Laboratory"
    },
    {
      name: "",
      logo: marketLogo,
      testimonial: "Professional approach to therapeutic manufacturing facility construction. Quality workmanship and timely project delivery.",
      project: "Manufacturing Facility"
    },
    {
      name: "",
      logo: medissiLogo,
      testimonial: "Excellent execution of our R&D facility. Aadhiyann's team understands the complex needs of pharmaceutical research infrastructure.",
      project: "R&D Facility"
    },
    {
      name: "",
      logo: megasysLogo,
      testimonial: "Their attention to detail in pharmaceutical facility construction is remarkable. Our biotech lab meets all regulatory requirements.",
      project: "Biotech Laboratory"
    },
    {
      name: "",
      logo: safetabLogo,
      testimonial: "Successfully delivered our pharmaceutical facility in Algeria with international standards. Great team with global experience.",
      project: "Pharmaceutical Facility"
    },
    {
      name: "",
      logo: saimirraLogo,
      testimonial: "Professional team that delivered our pharmaceutical distribution center on schedule. Great understanding of industry requirements.",
      project: "Distribution Center"
    },
    {
      name: "",
      logo: seigenLogo,
      testimonial: "Outstanding construction quality for our pharmaceutical plant. Aadhiyann understands international standards and local requirements perfectly.",
      project: "Pharmaceutical Plant"
    },
    {
      name: "",
      logo: sjpLogo,
      testimonial: "Excellent infrastructure solutions for our pharmaceutical operations. Their commitment to quality and safety is impressive.",
      project: "Pharmaceutical Operations"
    },
    {
      name: "",
      logo: skyecLogo,
      testimonial: "Professional approach to therapeutic manufacturing facility construction. Quality workmanship and timely project delivery.",
      project: "Manufacturing Facility"
    },
    {
      name: "",
      logo: softgelLogo,
      testimonial: "Excellent execution of our R&D facility. Aadhiyann's team understands the complex needs of pharmaceutical research infrastructure.",
      project: "R&D Facility"
    },
    {
      name: "",
      logo: stridesLogo,
      testimonial: "Successfully delivered our pharmaceutical facility with international standards. Great team with global experience.",
      project: "Pharmaceutical Facility"
    },
    {
      name: "",
      logo: sunbeamLogo,
      testimonial: "Outstanding construction of our laboratory facilities. Aadhiyann understands the specific requirements of pharmaceutical testing labs.",
      project: "Testing Laboratory"
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
            {/* <h3>Our Partners</h3> */}
            <div className="logos-grid">
              {customers.map((customer, index) => (
                <div key={index} className="customer-logo-item">
                  <div className="customer-logo">
                    <img src={customer.logo} alt={`Customer logo ${index + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', width: '100%', height: '100%' }} />
                  </div>
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
