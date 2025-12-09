"use client"

import { MapPin, Phone, Clock, Mail, Send } from "lucide-react"

export default function Contact() {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          color: #e0e0e0;
          background: #0b1622;
          line-height: 1.6;
        }

        /* HEADER */
        header {
          background: rgba(11, 22, 34, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 107, 53, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        nav {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          text-decoration: none;
          letter-spacing: -0.5px;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8c5a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        nav ul {
          list-style: none;
          display: flex;
          gap: 2rem;
        }

        nav a {
          text-decoration: none;
          color: #b0b0b0;
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          transition: all 0.3s ease;
          position: relative;
        }

        nav a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: #ff6b35;
          transition: width 0.3s ease;
        }

        nav a:hover {
          color: #ff6b35;
        }

        nav a:hover::after {
          width: 100%;
        }

        /* PAGE HEADER */
        .page-header {
          background: linear-gradient(180deg, rgba(11, 22, 34, 1) 0%, rgba(13, 27, 42, 1) 100%);
          padding: 4rem 2rem;
          text-align: center;
          border-bottom: 1px solid rgba(255, 107, 53, 0.05);
        }

        .page-header h1 {
          font-size: 2.5rem;
          font-weight: 300;
          color: #ffffff;
          margin-bottom: 0.75rem;
          letter-spacing: -0.5px;
        }

        .page-header p {
          color: #8899a6;
          font-size: 1rem;
          font-weight: 300;
          letter-spacing: 0.5px;
        }

        /* MAIN */
        main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 3rem;
        }

        /* FORM */
        .contact-form {
          background: rgba(13, 27, 42, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 3rem;
          border-radius: 8px;
          backdrop-filter: blur(10px);
        }

        .contact-form h2 {
          font-size: 1.5rem;
          font-weight: 300;
          color: #ffffff;
          margin-bottom: 2rem;
          letter-spacing: -0.5px;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          font-weight: 500;
          color: #8899a6;
          margin-bottom: 0.5rem;
          font-size: 0.85rem;
          letter-spacing: 0.5px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          font-family: inherit;
          font-size: 0.9rem;
          background: rgba(11, 22, 34, 0.6);
          color: #ffffff;
          transition: all 0.3s ease;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #5d707f;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #ff6b35;
          background: rgba(13, 27, 42, 0.8);
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8555 100%);
          color: #ffffff;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.2);
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
          background: linear-gradient(135deg, #ff8555 0%, #ff6b35 100%);
        }

        /* LOCATION INFO */
        .location-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .map-placeholder {
          width: 100%;
          height: 300px;
          background: #0d1b2a;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 0.9rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .location-details {
          background: rgba(13, 27, 42, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.5rem;
          border-radius: 8px;
        }

        .location-details h3 {
          font-size: 1.3rem;
          font-weight: 300;
          color: #ffffff;
          margin-bottom: 2rem;
          letter-spacing: -0.2px;
        }

        .info-item {
          margin-bottom: 1.5rem;
          display: flex;
          gap: 1rem;
        }

        .info-icon {
          color: #ff6b35;
          flex-shrink: 0;
          margin-top: 0.2rem;
        }

        .info-content strong {
          display: block;
          color: #ffffff;
          font-weight: 600;
          margin-bottom: 0.25rem;
          font-size: 0.9rem;
        }

        .info-content p {
          color: #b0b0b0;
          line-height: 1.6;
          font-size: 0.9rem;
        }

        /* FOOTER */
        footer {
          background: #0b1622;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4rem 2rem 2rem;
          color: #8899a6;
          font-size: 0.9rem;
          margin-top: auto;
        }

        .footer-content {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-col h4 {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          letter-spacing: -0.2px;
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col ul li {
          margin-bottom: 0.8rem;
        }

        .footer-col a {
          color: #8899a6;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-col a:hover {
          color: #ff6b35;
        }

        .footer-bottom {
          max-width: 1280px;
          margin: 0 auto;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          text-align: center;
          font-size: 0.8rem;
          color: #5d707f;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .page-header {
            padding: 3rem 1.5rem;
          }
        }

        @media (max-width: 600px) {
          nav {
            padding: 1rem;
            flex-direction: column;
            gap: 1rem;
          }

          .logo {
            font-size: 1.25rem;
          }

          nav ul {
            gap: 1.5rem;
            font-size: 0.9rem;
          }

          .page-header h1 {
            font-size: 2rem;
          }

          main {
            padding: 2rem 1rem;
          }

          .contact-form,
          .location-details {
            padding: 1.5rem;
          }

          .map-placeholder {
            height: 240px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>

      <header>
        <nav>
          <a href="/" className="logo">
            DriveLine Motors
          </a>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/inventory">Collection</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="page-header">
        <h1>Contact Us</h1>
        <p>Connect with our team to discuss your next vehicle</p>
      </div>

      <main>
        <div className="contact-container">
          <div className="contact-form">
            <h2>Send us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell us about your interest..." required></textarea>
              </div>

              <button type="submit" className="btn">
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>

          <div className="location-info">
            <div className="map-placeholder" style={{padding: 0}}>
              <iframe
                title="Dealership Location"
                src="https://www.google.com/maps?q=127+Riawena+Rd,+Salisbury,+QLD,+4107&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '8px', width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="location-details">
              <h3>Showroom & Hours</h3>

              <div className="info-item">
                <MapPin className="info-icon w-5 h-5" />
                <div className="info-content">
                  <strong>Location</strong>
                  <p>127 Riawena Rd, Salisbury, QLD, 4107</p>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon w-5 h-5" />
                <div className="info-content">
                  <strong>Phone</strong>
                  <p>(07) 3520 4080</p>
                </div>
              </div>

              <div className="info-item">
                <Clock className="info-icon w-5 h-5" />
                <div className="info-content">
                  <strong>Business Hours</strong>
                  <p>
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 5:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon w-5 h-5" />
                <div className="info-content">
                  <strong>Email</strong>
                  <p>hello@driveline-motors.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-col">
            <h4>DriveLine Motors</h4>
            <p>
              Premier destination for luxury and performance vehicles. 
              Experience excellence in every mile.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/inventory">Collection</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>127 Riawena Rd</li>
              <li>Salisbury, QLD 4107</li>
              <li>(07) 3520 4080</li>
              <li>hello@driveline-motors.com</li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Hours</h4>
            <ul>
              <li>Mon - Fri: 9am - 6pm</li>
              <li>Sat: 10am - 5pm</li>
              <li>Sun: Closed</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 DriveLine Motors. All rights reserved.
        </div>
      </footer>
    </>
  )
}