import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'contact'];
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= (document.getElementById(section)?.offsetTop || 0) - 100) {
          current = section;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const menuItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-left">
<a href="#hero" className="nav-logo-link" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} style={{ fontWeight: 'bold', fontSize: '1.8rem', color: '#aa3bff', textDecoration: 'none' }}>
            Aadhiyann
          </a>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}

          >
            ☰
          </button>
        </div>
        <div className="nav-right">
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? 'nav-link active' : 'nav-link'}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

