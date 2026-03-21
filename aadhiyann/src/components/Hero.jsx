const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
<h1>Welcome to <span className="font-bold text-blue-600">Aadhiyann</span></h1>
        <p>Your trusted partner for innovative solutions. Explore our services and get in touch today.</p>
        <button className="cta-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;

