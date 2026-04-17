const Hero = () => {
  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-content">
          <h1>Welcome to <span className="font-bold text-blue-600">Aadhiyann</span></h1>
          <p>Your trusted partner for innovative solutions. Explore our services and get in touch today.</p>
          <button className="cta-btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Get Started
          </button>
        </div>
      </section>

      <section id="video-section" className="video-section">
        <div className="container">
          <div className="video-wrapper">
            <video 
              className="promo-video"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/src/assets/videos/hero-background.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="video-content">
            <h2>Building the Future of Infrastructure</h2>
            <p>Watch how Aadhiyann Infraatech delivers cutting-edge infrastructure solutions across all sectors with precision, quality, and innovation.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

