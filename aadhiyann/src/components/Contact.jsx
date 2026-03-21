const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Ready to start your project? Get in touch with us today.</p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p><strong>Email:</strong> info@aadhiyann.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Address:</strong> 123 Business St, City, State 12345</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

