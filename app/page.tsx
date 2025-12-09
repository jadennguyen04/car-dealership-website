"use client"

import { Tag, Award, ShieldCheck } from "lucide-react"

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
          background: #0b1622;
          line-height: 1.6;
        }

        /* HEADER & NAVIGATION */
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

        /* HERO SECTION */
        .hero {
          background:
            linear-gradient(120deg, rgba(11, 22, 34, 0.9) 0%, rgba(13, 27, 42, 0.95) 100%),
            url('/hero-luxury-car.jpg') no-repeat center center;
          background-size: cover;
          background-attachment: fixed;
          padding: 8rem 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
          min-height: 80vh;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.05) 0%, transparent 60%);
          pointer-events: none;
        }

        .hero h1 {
          font-size: 3.8rem;
          font-weight: 300;
          color: #fff;
          margin-bottom: 1.5rem;
          line-height: 1.1;
          letter-spacing: -1px;
          text-shadow: 0 4px 30px rgba(0,0,0,0.5);
          font-family: 'Segoe UI', 'Roboto', 'Montserrat', sans-serif;
          position: relative;
          z-index: 1;
        }

        .hero p {
          font-size: 1.2rem;
          color: #b0b0b0;
          margin-bottom: 2.5rem;
          max-width: 650px;
          font-weight: 300;
          line-height: 1.8;
          text-shadow: 0 2px 15px rgba(0,0,0,0.5);
          font-family: 'Segoe UI', 'Roboto', 'Montserrat', sans-serif;
          position: relative;
          z-index: 1;
        }

        .btn {
          display: inline-block;
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8555 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          position: relative;
          z-index: 1;
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.2);
          text-transform: uppercase;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(255, 107, 53, 0.3);
          background: linear-gradient(135deg, #ff8555 0%, #ff6b35 100%);
        }

        .btn-secondary {
          background: transparent;
          color: #ff6b35;
          border: 1px solid #ff6b35;
          box-shadow: none;
        }

        .btn-secondary:hover {
          background: rgba(255, 107, 53, 0.05);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.1);
        }

        /* SECTIONS */
        section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 5rem 2rem;
        }

        section h2 {
          font-size: 2.5rem;
          font-weight: 300;
          color: #ffffff;
          margin-bottom: 3rem;
          text-align: center;
          letter-spacing: -0.5px;
        }

        /* FEATURED VEHICLES */
        .vehicles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .vehicle-card {
          background: #0d1b2a;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
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
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
          pointer-events: none;
        }

        .vehicle-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 107, 53, 0.3);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }

        .vehicle-card:hover::before {
          opacity: 1;
        }

        .vehicle-image {
          width: 100%;
          height: 220px;
          background: #0b1622;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          font-size: 0.85rem;
          position: relative;
          overflow: hidden;
        }
        
        .vehicle-image img {
          transition: transform 0.5s ease;
        }

        .vehicle-card:hover .vehicle-image img {
          transform: scale(1.05);
        }

        .vehicle-info {
          padding: 1.5rem;
          position: relative;
          z-index: 2;
        }

        .vehicle-model {
          font-size: 1.1rem;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 0.5rem;
          letter-spacing: -0.2px;
        }

        .vehicle-price {
          font-size: 1.4rem;
          font-weight: 600;
          color: #ff6b35;
          margin-bottom: 0.75rem;
        }

        .vehicle-details {
          font-size: 0.85rem;
          color: #8899a6;
          line-height: 1.6;
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        
        .vehicle-details div {
          display: flex;
          align-items: center;
        }
        
        .vehicle-details div::before {
          content: '•';
          margin-right: 0.5rem;
          color: #ff6b35;
          opacity: 0.7;
        }
        
        .vehicle-details div:first-child::before {
          display: none;
        }

        /* FEATURES/WHY US */
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature {
          text-align: center;
          padding: 2.5rem 2rem;
          background: rgba(13, 27, 42, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .feature:hover {
          background: rgba(13, 27, 42, 0.8);
          border-color: rgba(255, 107, 53, 0.2);
          transform: translateY(-4px);
        }

        .feature h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.75rem;
          letter-spacing: -0.2px;
        }

        .feature p {
          color: #8899a6;
          font-size: 0.9rem;
          line-height: 1.7;
        }

        /* ABOUT SECTION */
        .about-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text h3 {
          font-size: 2rem;
          font-weight: 300;
          color: #ffffff;
          margin-bottom: 1.5rem;
          letter-spacing: -0.5px;
        }

        .about-text p {
          color: #b0b0b0;
          line-height: 1.8;
          margin-bottom: 1.5rem;
          font-size: 1rem;
          font-weight: 300;
        }

        .about-image {
          width: 100%;
          height: 400px;
          background: #0d1b2a;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #666;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
          overflow: hidden;
        }
        
        .about-image img {
          transition: transform 0.5s ease;
        }
        
        .about-image:hover img {
          transform: scale(1.02);
        }

        /* CTA BANNER */
        .cta-banner {
          background: linear-gradient(135deg, #0d1b2a 0%, #1a2c3d 100%);
          color: #ffffff;
          text-align: center;
          padding: 5rem 2rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        .cta-banner::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 107, 53, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-banner h2 {
          color: #ffffff;
          margin-bottom: 1rem;
          font-size: 2.2rem;
          font-weight: 300;
          letter-spacing: -0.5px;
        }

        .cta-banner p {
          color: #8899a6;
          margin-bottom: 2.5rem;
          font-size: 1rem;
          font-weight: 300;
        }

        .btn-light {
          background: linear-gradient(135deg, #ff6b35 0%, #ff8555 100%);
          color: #ffffff;
          border: none;
        }

        .btn-light:hover {
          background: linear-gradient(135deg, #ff8555 0%, #ff6b35 100%);
        }

        /* FOOTER */
        footer {
          background: #0b1622;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4rem 2rem 2rem;
          color: #8899a6;
          font-size: 0.9rem;
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
          .about-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .hero h1 {
            font-size: 3rem;
          }
        }

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

          .hero {
            padding: 4rem 1rem;
            min-height: 60vh;
          }

          .hero h1 {
            font-size: 2rem;
          }

          .hero p {
            font-size: 0.95rem;
            padding: 0 1rem;
          }

          section {
            padding: 3rem 1rem;
          }

          section h2 {
            font-size: 1.75rem;
          }

          .vehicles-grid {
            grid-template-columns: 1fr;
          }

          .features {
            grid-template-columns: 1fr;
          }

          .cta-banner {
            padding: 3rem 1.5rem;
          }

          .cta-banner h2 {
            font-size: 1.8rem;
          }
          
          .about-image {
             height: 250px;
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
              opacity: 0.3,
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
                  <img src="/audis3.jpg" alt="Audi S3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="vehicle-info">
                  <div className="vehicle-model">2023 Audi S3</div>
                  <div className="vehicle-price">$68,900</div>
                  <div className="vehicle-details">
                    <div>19,960 km</div>
                    <div>Petrol</div>
                    <div>Premium</div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/vehicle/2" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <img src="/bmwm440i.jpg" alt="BMW M440i" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="vehicle-info">
                  <div className="vehicle-model">2022 BMW M440i</div>
                  <div className="vehicle-price">$56,200</div>
                  <div className="vehicle-details">
                    <div>18,900 miles</div>
                    <div>Sedan</div>
                    <div>Luxury</div>
                  </div>
                </div>
              </div>
            </a>

            <a href="/vehicle/3" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="vehicle-card">
                <div className="vehicle-image">
                  <img src="/mercc.jpg" alt="Mercedes-Benz C-Class" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="vehicle-info">
                  <div className="vehicle-model">2023 Mercedes-Benz C-Class</div>
                  <div className="vehicle-price">$52,500</div>
                  <div className="vehicle-details">
                    <div>8,200 km</div>
                    <div>SUV</div>
                    <div>Warranty</div>
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
              <div className="flex justify-center"><Tag className="w-10 h-10 text-[#ff6b35] mb-4" /></div>
              <h3>Transparent Pricing</h3>
              <p>
                No surprises. Every vehicle comes with complete history, inspection reports, and fair market pricing.
              </p>
            </div>

            <div className="feature">
              <div className="flex justify-center"><Award className="w-10 h-10 text-[#ff6b35] mb-4" /></div>
              <h3>Expert Curation</h3>
              <p>Handpicked inventory of premium vehicles meeting our rigorous quality standards.</p>
            </div>

            <div className="feature">
              <div className="flex justify-center"><ShieldCheck className="w-10 h-10 text-[#ff6b35] mb-4" /></div>
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
              <img src="/about.avif" alt="About DriveLine Motors" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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