"use client"

export default function Inventory() {
  const vehicles = [
    {
      id: "1",
      name: "2023 Audi S3",
      price: "$68,900",
      miles: "19,960",
      type: "Sedan",
      info: "Premium Condition",
    },
    {
      id: "2",
      name: "2022 BMW M440i",
      price: "$56,200",
      miles: "18,900",
      type: "Sedan",
      info: "Luxury Trim",
    },
    {
      id: "3",
      name: "2023 Mercedes-Benz C-Class",
      price: "$52,500",
      miles: "8,200",
      type: "Sedan",
      info: "Factory Warranty",
    },
    {
      id: "4",
      name: "Test",
      price: "Test",
      miles: "Test",
      type: "Test",
      info: "Test",
    },
   
  ]

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

        /* PAGE HEADER */
        .page-header {
          background: linear-gradient(180deg, rgba(11, 22, 34, 1) 0%, rgba(13, 27, 42, 1) 100%);
          padding: 3rem 2rem;
          text-align: center;
          border-bottom: 1px solid rgba(255, 107, 53, 0.05);
        }

        .page-header h1 {
          font-size: 2.2rem;
          font-weight: 300;
          color: #ffffff;
          margin-bottom: 0.5rem;
          letter-spacing: -0.5px;
        }

        .page-header p {
          color: #8899a6;
          font-size: 0.95rem;
          font-weight: 300;
          letter-spacing: 0.5px;
        }

        /* MAIN */
        main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem;
        }

        .inventory-container {
          display: flex;
          gap: 2rem;
          align-items: flex-start;
        }

        /* FILTERS */
        .filters {
          width: 260px;
          background: rgba(13, 27, 42, 0.4);
          border-right: 1px solid rgba(255, 255, 255, 0.05);
          padding-right: 2rem;
          height: fit-content;
          position: sticky;
          top: 90px;
        }

        .filters h3 {
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .filter-group {
          margin-bottom: 1.5rem;
        }

        .filter-group label {
          display: block;
          font-size: 0.8rem;
          font-weight: 500;
          color: #8899a6;
          margin-bottom: 0.5rem;
          letter-spacing: 0.5px;
        }

        .filter-group select {
          width: 100%;
          padding: 0.6rem 0.75rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          font-size: 0.85rem;
          background: rgba(11, 22, 34, 0.6);
          color: #e0e0e0;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-group select:focus {
          outline: none;
          border-color: #ff6b35;
          background: rgba(13, 27, 42, 0.8);
        }

        /* VEHICLES SECTION */
        .vehicles-section {
          flex: 1;
        }

        .vehicles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
          justify-content: center;
        }

        .vehicle-card {
          background: #0d1b2a;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          overflow: hidden;
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          display: block;
          position: relative;
        }

        .vehicle-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 107, 53, 0.3);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .vehicle-image {
          width: 100%;
          height: 200px;
          background: #0b1622;
          display: flex;
          align-items: center;
          justify-content: center;
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

        /* PAGINATION */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          align-items: center;
          margin-top: 4rem;
        }

        .pagination button,
        .pagination span {
          padding: 0.5rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: transparent;
          color: #8899a6;
          border-radius: 2px;
          cursor: pointer;
          font-weight: 500;
          font-size: 0.8rem;
          transition: all 0.2s ease;
        }

        .pagination button:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .pagination span.active {
          background: #ff6b35;
          color: #ffffff;
          border-color: #ff6b35;
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
        @media (max-width: 1024px) {
          .inventory-container {
            flex-direction: column;
          }

          .filters {
            width: 100%;
            position: static;
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding-right: 0;
            padding-bottom: 1.5rem;
            margin-bottom: 2rem;
          }
          
          .filter-group {
            display: inline-block;
            width: 32%;
            margin-right: 1%;
            margin-bottom: 1rem;
            vertical-align: top;
          }

          .vehicles-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .filter-group {
            width: 48%;
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

          .page-header {
            padding: 3rem 1.5rem;
          }

          .page-header h1 {
            font-size: 1.8rem;
          }
          
          .filter-group {
            width: 100%;
            margin-right: 0;
            display: block;
          }

          .vehicles-grid {
            grid-template-columns: 1fr;
          }
          
          main {
            padding: 1.5rem 1rem;
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
        <h1>Our Collection</h1>
        <p>Curated excellence for the discerning driver</p>
      </div>

      <main>
        <div className="inventory-container">
          <aside className="filters">
            <h3>Refine Search</h3>
            <div className="filter-group">
              <label htmlFor="price">Price Range</label>
              <select id="price">
                <option>All Ranges</option>
                <option>Under $30,000</option>
                <option>$30,000 - $50,000</option>
                <option>$50,000 - $75,000</option>
                <option>Over $75,000</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="year">Year</label>
              <select id="year">
                <option>Any Year</option>
                <option>2023 & Newer</option>
                <option>2021 - 2023</option>
                <option>2018 - 2021</option>
                <option>2015 - 2018</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="type">Body Style</label>
              <select id="type">
                <option>All Styles</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Coupe</option>
                <option>Wagon</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="fuel">Fuel Type</label>
              <select id="fuel">
                <option>Any Fuel</option>
                <option>Electric</option>
                <option>Hybrid</option>
                <option>Gasoline</option>
              </select>
            </div>
          </aside>

          <section className="vehicles-section">
            <div className="vehicles-grid">
              {vehicles.map((vehicle) => (
                <a key={vehicle.id} href={`/vehicle/${vehicle.id}`} className="vehicle-card">
                  <div className="vehicle-image">
                    <img
                      src={
                        vehicle.id === "1"
                          ? "audis3.jpg"
                          : vehicle.id === "2"
                          ? "bmwm440i.jpg"
                          : vehicle.id === "3"
                          ? "mercc.jpg"
                          : "test.jpg"
                      }
                      alt={vehicle.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div className="vehicle-info">
                    <div className="vehicle-model">{vehicle.name}</div>
                    <div className="vehicle-price">{vehicle.price}</div>
                    <div className="vehicle-details">
                      <div>{vehicle.miles} km</div>
                      <div>{vehicle.type}</div>
                      <div>{vehicle.info}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="pagination">
              <button>Previous</button>
              <span className="active">1</span>
              <span>2</span>
              <span>3</span>
              <button>Next</button>
            </div>
          </section>
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