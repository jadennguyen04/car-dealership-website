"use client"

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
          background: #0d1b2a;
          line-height: 1.6;
        }

        /* HEADER */
        header {
          background: rgba(13, 27, 42, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 107, 53, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        nav {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.4rem;
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
          gap: 2.5rem;
        }

        nav a {
          text-decoration: none;
          color: #b0b0b0;
          font-size: 0.9rem;
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
          height: 2px;
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
          background: linear-gradient(135deg, #1a3a52 0%, #0d1b2a 100%);
          padding: 4.5rem 2rem;
          text-align: center;
          border-bottom: 1px solid rgba(255, 107, 53, 0.1);
        }

        .page-header h1 {
          font-size: 2.8rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
          letter-spacing: -0.5px;
        }

        .page-header p {
          color: #b0b0b0;
          font-size: 1.05rem;
          font-weight: 300;
        }

        /* MAIN */
        main {
          max-width: 1400px;
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
          background: rgba(26, 58, 82, 0.3);
          border: 1px solid rgba(255, 107, 53, 0.15);
          padding: 3.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .contact-form h2 {
          font-size: 1.6rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          letter-spacing: -0.3px;
        }

        .form-group {
          margin-bottom: 2rem;
        }

        .form-group label {
          display: block;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          letter-spacing: 0.2px;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 1rem;
          border: 1px solid rgba(255, 107, 53, 0.2);
          border-radius: 8px;
          font-family: inherit;
          font-size: 0.95rem;
          background: rgba(13, 27, 42, 0.5);
          color: #e0e0e0;
          transition: all 0.3s ease;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 140px;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #666;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #ff6b35;
          background: rgba(26, 58, 82, 0.4);
          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
        }

        .btn {
          display: inline-block;
          padding: 1rem 2.8rem;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8c5a 100%);
          color: #ffffff;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          width: 100%;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(255, 107, 53, 0.4);
        }

        /* LOCATION INFO */
        .location-info {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .map-placeholder {
          width: 100%;
          height: 340px;
          background: linear-gradient(135deg, #1a3a52 0%, #0d1b2a 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 0.9rem;
          border: 1px solid rgba(255, 107, 53, 0.15);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .location-details {
          background: rgba(26, 58, 82, 0.3);
          border: 1px solid rgba(255, 107, 53, 0.15);
          padding: 3.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .location-details h3 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          letter-spacing: -0.3px;
        }

        .info-item {
          margin-bottom: 2rem;
        }

        .info-item strong {
          display: block;
          color: #ff6b35;
          font-weight: 700;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
          letter-spacing: 0.2px;
        }

        .info-item p {
          color: #b0b0b0;
          line-height: 2;
          font-size: 0.95rem;
        }

        /* FOOTER */
        footer {
          background: rgba(13, 27, 42, 0.95);
          color: #b0b0b0;
          padding: 3rem 2rem;
          text-align: center;
          font-size: 0.85rem;
          margin-top: 3rem;
          border-top: 1px solid rgba(255, 107, 53, 0.1);
        }

        footer a {
          color: #ff6b35;
          text-decoration: none;
          margin: 0 1.5rem;
          transition: color 0.3s ease;
        }

        footer a:hover {
          color: #ff8c5a;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
          }

          nav ul {
            gap: 1.5rem;
          }

          nav a {
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          nav {
            padding: 1rem;
          }

          .logo {
            font-size: 1.1rem;
          }

          nav ul {
            gap: 1rem;
            font-size: 0.8rem;
          }

          .page-header h1 {
            font-size: 1.8rem;
          }

          .page-header p {
            font-size: 0.95rem;
          }

          main {
            padding: 2rem 1rem;
          }

          .contact-form,
          .location-details {
            padding: 2rem;
          }

          .map-placeholder {
            height: 240px;
          }
        }
      `}</style>

      <header>
        <nav>
          <a href="/" className="logo">
            DriveLine
          </a>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/inventory">Inventory</a>
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
                Send Message
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
                style={{ border: 0, borderRadius: '12px', width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="location-details">
              <h3>Showroom & Hours</h3>

              <div className="info-item">
                <strong>Location</strong>
                <p>
                  127 Riawena Rd, Salisbury, QLD, 4107
                </p>
              </div>

              <div className="info-item">
                <strong>Phone</strong>
                <p>(07) 3520 4080</p>
              </div>

              <div className="info-item">
                <strong>Business Hours</strong>
                <p>
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 5:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>

              <div className="info-item">
                <strong>Email</strong>
                <p>hello@driveline-motors.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>
          &copy; 2025 DriveLine Motors. All rights reserved. | <a href="/">Home</a> <a href="/inventory">Inventory</a>{" "}
          <a href="/contact">Contact</a>
        </p>
      </footer>
    </>
  )
}
