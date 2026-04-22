import civilConstruction from '../assets/services/civil-construction.png';
import modularPanels from '../assets/services/modular-panels.png';
import hvacSystems from '../assets/services/hvac-systems.jpeg';
import waterSystems from '../assets/services/water-systems.jpg';
import utilityPipelines from '../assets/services/utility-pipelines.jpeg';
import electricalProjects from '../assets/services/electrical-projects.jpg';
import operationMaintenance from '../assets/services/operation-maintenance.jpg';
import computerValidation from '../assets/services/computer-validation.png';
import buildingManagement from '../assets/services/building-management.png';
import governmentLiaisoning from '../assets/services/government-liaisoning.png';
import pufloorig from '../assets/services/PU floornig.jpeg';

const Services = () => {
  const services = [
    { title: 'Civil Construction', image: civilConstruction },
    { title: 'Modular Panels', image: modularPanels },
    { title: 'HVAC Systems', image: hvacSystems },
    { title: 'PU/Epoxy Flooring works', image: pufloorig },
    { title: 'Water Systems', image: waterSystems },
    { title: 'Utility Pipelines', image: utilityPipelines },
    { title: 'Electrical Projects', image: electricalProjects },
    { title: 'Operation & Maintenance', image: operationMaintenance },
    { title: 'Computer System Validation', image: computerValidation },
    { title: 'Building Management Solutions', image: buildingManagement },
    { title: 'Government Liaisoning Work', image: governmentLiaisoning }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2>Our Services</h2>
        <p>Comprehensive solutions to power your business growth.</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} className="service-image" />
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

