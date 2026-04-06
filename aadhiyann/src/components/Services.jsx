const Services = () => {
  const services = [
    { title: 'Civil Construction' },
    { title: 'Modular Panels' },
    { title: 'HVAC Systems' },
    { title: 'Water Systems' },
    { title: 'Utility Pipelines' },
    { title: 'Electrical Projects' },
    { title: 'Operation & Maintenance' },
    { title: 'Computer System Validation' },
    { title: 'Building Management Solutions' },
    { title: 'Government Liaisoning Work' }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Our Services</h2>
        <p>Comprehensive solutions to power your business growth.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

