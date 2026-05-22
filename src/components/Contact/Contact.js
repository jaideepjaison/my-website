import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const mail = 'jaison3666@gmail.com';
  const linkedIn = 'https://www.linkedin.com/in/jaison-jaideep-lobo/';
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const badWords = ['spam', 'violence', 'abuse', 'hate', 'stupid', 'idiot', 'fool', 'kill', 'murder'];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Spam/Violence Validation
    const messageLower = message.toLowerCase();
    const isSpam = badWords.some(word => messageLower.includes(word));
    
    if (isSpam) {
      alert("Your message contains inappropriate content and cannot be sent.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Hi Jaison,\n\n${message}\n\nFrom:\n${name}\n${email}`);
    
    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      />
      <div className="contact-page-wrap">
        <div className="contact-container-custom glass-card">
          <div className="contact-info-panel">
            <div className="contact-info-header">
              <h2>Let's Connect</h2>
              <p>I am always open to discussing new full-stack opportunities, freelance work, or technical collaboration.</p>
            </div>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details-box">
                  <span className="contact-details-label">Email</span>
                  <a href={`mailto:${mail}`} className="contact-details-value">
                    {mail}
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <i className="fab fa-linkedin-in"></i>
                </div>
                <div className="contact-details-box">
                  <span className="contact-details-label">LinkedIn</span>
                  <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="contact-details-value">
                    Jaison Jaideep Lobo
                  </a>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-icon-box">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details-box">
                  <span className="contact-details-label">Location</span>
                  <span className="contact-details-value">Bengaluru, India</span>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form-panel" onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="name-input">Your Name</label>
              <input
                id="name-input"
                type="text"
                className="contact-form-input"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email-input">Your Email</label>
              <input
                id="email-input"
                type="email"
                className="contact-form-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="contact-form-group">
              <label htmlFor="message-input">Message</label>
              <textarea
                id="message-input"
                rows="4"
                className="contact-form-input"
                placeholder="How can I help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-submit-btn">
              Send Message <i className="fas fa-paper-plane" style={{ fontSize: '0.8rem' }}></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;