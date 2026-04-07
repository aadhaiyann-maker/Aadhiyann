import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS IDs
    const serviceId = 'service_qxvv24d';
    const templateId = 'template_krl35jc';
    const publicKey = 'QRFsrYJSvDx3zWspj';

    emailjs.send(serviceId, templateId, {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      message: formData.message,
      to_email: 'admin@aadhiyann.com'
    }, publicKey)
      .then(() => {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch(() => {
        setSubmitMessage('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Ready to start your project? Get in touch with us today.</p>
        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's Talk</h3>
            <p><strong>Email:</strong> info@aadhiyann.com</p>
            <p><strong>Phone:</strong> +91 8754562829</p>
            <p><strong>Address:</strong> Plot No 6, Thirupathi Thirumalai Nagar, Nallambakkam Kandigai 
              Chennai - 600127</p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitMessage && <p>{submitMessage}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

