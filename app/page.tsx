"use client"

export default function Home() {
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

        /* HEADER & NAVIGATION */
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

        /* HERO SECTION */
        .hero {
          background:
            linear-gradient(120deg, rgba(18, 32, 47, 0.95) 0%, rgba(26, 58, 82, 0.98) 100%),
            url('/hero-luxury-car.jpg') no-repeat center center;
          background-size: cover;
          background-attachment: fixed;
          padding: 10rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 50%, rgba(255, 107, 53, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .hero h1 {
          font-size: 4.2rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          letter-spacing: -2px;
          text-shadow: 0 4px 32px rgba(0,0,0,0.45), 0 1px 0 #222;
          font-family: 'Segoe UI', 'Roboto', 'Montserrat', sans-serif;
          position: relative;
          z-index: 1;
        }

        .hero p {
          font-size: 1.35rem;
          color: #e0e0e0;
          margin-bottom: 2.5rem;
          max-width: 700px;
          font-weight: 400;
          line-height: 1.7;
          text-shadow: 0 2px 16px rgba(0,0,0,0.35);
          font-family: 'Segoe UI', 'Roboto', 'Montserrat', sans-serif;
          position: relative;
          z-index: 1;
        }

        .btn {
          display: inline-block;
          padding: 1rem 2.8rem;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8c5a 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 50px;
          font-weight: 600;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          position: relative;
          z-index: 1;
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
        }

        .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(255, 107, 53, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #ff6b35;
          border: 2px solid #ff6b35;
          box-shadow: none;
        }

        .btn-secondary:hover {
          background: rgba(255, 107, 53, 0.1);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.2);
        }

        /* SECTIONS */
        section {
          max-width: 1400px;
          margin: 0 auto;
          padding: 6rem 2rem;
        }

        section h2 {
          font-size: 3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 3.5rem;
          text-align: center;
          letter-spacing: -0.5px;
        }

        /* FEATURED VEHICLES */
        .vehicles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-bottom: 2rem;
        }

        .vehicle-card {
          background: rgba(26, 58, 82, 0.4);
          border: 1px solid rgba(255, 107, 53, 0.2);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          position: relative;
        }

        .vehicle-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
          pointer-events: none;
        }

        .vehicle-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 107, 53, 0.5);
          box-shadow: 0 16px 48px rgba(255, 107, 53, 0.2);
        }

        .vehicle-card:hover::before {
          opacity: 1;
        }

        .vehicle-image {
          width: 100%;
          height: 240px;
          background: linear-gradient(135deg, #1a3a52 0%, #0d1b2a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 0.85rem;
          border-bottom: 1px solid rgba(255, 107, 53, 0.1);
        }

        .vehicle-info {
          padding: 2.5rem 2rem;
          position: relative;
          z-index: 2;
        }

        .vehicle-model {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.75rem;
          letter-spacing: -0.3px;
        }

        .vehicle-price {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8c5a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }

        .vehicle-details {
          font-size: 0.9rem;
          color: #909090;
          line-height: 1.8;
        }

        /* FEATURES/WHY US */
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 3.5rem;
        }

        .feature {
          text-align: center;
          padding: 3rem 2rem;
          background: rgba(255, 107, 53, 0.05);
          border: 1px solid rgba(255, 107, 53, 0.15);
          border-radius: 12px;
          transition: all 0.3s ease;
        }

        .feature:hover {
          background: rgba(255, 107, 53, 0.1);
          border-color: rgba(255, 107, 53, 0.3);
          transform: translateY(-5px);
        }

        .feature-icon {
          font-size: 2.8rem;
          margin-bottom: 1.5rem;
          color: #ff6b35;
        }

        .feature h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1rem;
          letter-spacing: -0.3px;
        }

        .feature p {
          color: #b0b0b0;
          font-size: 0.95rem;
          line-height: 1.8;
        }

        /* ABOUT SECTION */
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4.5rem;
          align-items: center;
        }

        .about-text h3 {
          font-size: 2.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          letter-spacing: -0.5px;
        }

        .about-text p {
          color: #b0b0b0;
          line-height: 2;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .about-image {
          width: 100%;
          height: 380px;
          background: linear-gradient(135deg, #1a3a52 0%, #0d1b2a 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          border: 1px solid rgba(255, 107, 53, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
        }

        /* CTA BANNER */
        .cta-banner {
          background: linear-gradient(135deg, #1a3a52 0%, #0d1b2a 100%);
          color: #ffffff;
          text-align: center;
          padding: 5rem 2rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 107, 53, 0.2);
          box-shadow: 0 12px 40px rgba(255, 107, 53, 0.15);
        }

        .cta-banner h2 {
          color: #ffffff;
          margin-bottom: 1rem;
          font-size: 2.6rem;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .cta-banner p {
          color: #b0b0b0;
          margin-bottom: 2.5rem;
          font-size: 1.05rem;
          font-weight: 300;
        }

        .btn-light {
          background: #ff6b35;
          color: #ffffff;
          border: none;
        }

        .btn-light:hover {
          background: #ff8c5a;
        }

        /* FOOTER */
        footer {
          background: rgba(13, 27, 42, 0.95);
          color: #b0b0b0;
          padding: 3rem 2rem;
          text-align: center;
          font-size: 0.85rem;
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
          .hero h1 {
            font-size: 2.3rem;
          }

          .hero p {
            font-size: 1rem;
          }

          section h2 {
            font-size: 2rem;
          }

          .about-container {
            grid-template-columns: 1fr;
          }

          nav ul {
            gap: 1.5rem;
          }

          nav a {
            font-size: 0.85rem;
          }

          .vehicles-grid {
            grid-template-columns: 1fr;
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

          .hero {
            padding: 5rem 1rem;
          }

          .hero h1 {
            font-size: 1.8rem;
          }

          .hero p {
            font-size: 0.95rem;
          }

          section {
            padding: 3rem 1rem;
          }

          section h2 {
            font-size: 1.5rem;
          }

          .vehicles-grid {
            grid-template-columns: 1fr;
          }

          .features {
            grid-template-columns: 1fr;
          }

          .cta-banner h2 {
            font-size: 1.8rem;
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
              <a href="/inventory">Inventory</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" style={{ position: 'relative' }}>
          <img
            src="/background.avif"
            alt="Luxury Car Hero Background"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 0,
              opacity: 0.35,
            }}
          />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h1>Discover Premium Vehicles</h1>
            <p>Curated selection of luxury automobiles with transparent pricing and exceptional service</p>
            <a href="/inventory" className="btn">
              Explore Collection
            </a>
          </div>
        </section>

        {/* FEATURED VEHICLES */}
        <section>
          <h2>Featured Vehicles</h2>
          <div className="vehicles-grid">
            <a href="/vehicle/1" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <img src="/audis3.jpg" alt="Audi S3" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
                <div className="vehicle-info">
                  <div className="vehicle-model">2023 Audi S3</div>
                  <div className="vehicle-price">$68,900</div>
                  <div className="vehicle-details">
                    <div>• 19,960 km</div>
                    <div>• Petrol</div>
                    <div>• Premium condition</div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/vehicle/2" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <img src="/bmwm440i.jpg" alt="BMW M440i" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
                <div className="vehicle-info">
                  <div className="vehicle-model">2022 BMW M440i</div>
                  <div className="vehicle-price">$56,200</div>
                  <div className="vehicle-details">
                    <div>• 18,900 miles</div>
                    <div>• Sedan</div>
                    <div>• Luxury trim</div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/vehicle/3" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <img src="/mercc.jpg" alt="Mercedes-Benz C-Class" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
                <div className="vehicle-info">
                  <div className="vehicle-model">2023 Mercedes-Benz C-Class</div>
                  <div className="vehicle-price">$52,500</div>
                  <div className="vehicle-details">
                    <div>• 8,200 km</div>
                    <div>• SUV</div>
                    <div>• Factory warranty</div>
                  </div>
                </div>
              </div>
            </a>

            
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section>
          <h2>Why Choose DriveLine</h2>
          <div className="features">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Transparent Pricing</h3>
              <p>
                No surprises. Every vehicle comes with complete history, inspection reports, and fair market pricing.
              </p>
            </div>

            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Expert Curation</h3>
              <p>Handpicked inventory of premium vehicles meeting our rigorous quality standards.</p>
            </div>

            <div className="feature">
              <div className="feature-icon">✓</div>
              <h3>Premium Service</h3>
              <p>Dedicated support team providing personalized guidance throughout your journey.</p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section>
          <h2>About DriveLine Motors</h2>
          <div className="about-container">
            <div className="about-text">
              <h3>Excellence in Motion</h3>
              <p>
                DriveLine Motors has been the trusted leader in premium automotive retail, consistently delivering
                exceptional vehicles and uncompromising service to discerning buyers.
              </p>
              <p>
                We believe your vehicle purchase should be seamless, transparent, and enjoyable. That's why we've built
                our business on integrity, quality, and genuine customer care.
              </p>
            </div>
            <div className="about-image">
              <img src="/about.avif" alt="About DriveLine Motors" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="cta-banner">
            <h2>Ready for Your Next Adventure?</h2>
            <p>Browse our curated selection and connect with our team today</p>
            <a href="/contact" className="btn btn-light">
              Get Started
            </a>
          </div>
        </section>
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
