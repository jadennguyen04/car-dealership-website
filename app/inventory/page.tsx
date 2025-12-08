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
          padding: 3rem 2rem;
        }

        .inventory-container {
          display: flex;
          gap: 3rem;
        }

        /* FILTERS */
        .filters {
          width: 280px;
          background: rgba(26, 58, 82, 0.3);
          border: 1px solid rgba(255, 107, 53, 0.15);
          padding: 2.5rem;
          border-radius: 12px;
          height: fit-content;
          position: sticky;
          top: 100px;
        }

        .filters h3 {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 2rem;
          letter-spacing: 0.3px;
        }

        .filter-group {
          margin-bottom: 2rem;
        }

        .filter-group label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #ff6b35;
          margin-bottom: 0.75rem;
          letter-spacing: 0.2px;
        }

        .filter-group select {
          width: 100%;
          padding: 0.7rem 0.85rem;
          border: 1px solid rgba(255, 107, 53, 0.2);
          border-radius: 6px;
          font-size: 0.9rem;
          background: rgba(13, 27, 42, 0.5);
          color: #e0e0e0;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-group select:focus {
          outline: none;
          border-color: #ff6b35;
          background: rgba(26, 58, 82, 0.4);
          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
        }

        /* VEHICLES SECTION */
        .vehicles-section {
          flex: 1;
        }

        .vehicles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2.5rem;
          margin-bottom: 3.5rem;
        }

        .vehicle-card {
          background: rgba(26, 58, 82, 0.4);
          border: 1px solid rgba(255, 107, 53, 0.2);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          text-decoration: none;
          color: inherit;
          display: block;
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

        /* PAGINATION */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          align-items: center;
        }

        .pagination button,
        .pagination span {
          padding: 0.7rem 0.95rem;
          border: 1px solid rgba(255, 107, 53, 0.2);
          background: rgba(26, 58, 82, 0.3);
          color: #e0e0e0;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.3s ease;
        }

        .pagination button:hover {
          background: rgba(255, 107, 53, 0.2);
          border-color: #ff6b35;
          color: #ff6b35;
        }

        .pagination span.active {
          background: linear-gradient(135deg, #ff6b35 0%, #ff8c5a 100%);
          color: #ffffff;
          border-color: #ff6b35;
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
          .inventory-container {
            flex-direction: column;
          }

          .filters {
            width: 100%;
            position: static;
          }

          .vehicles-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
            padding: 1.5rem;
          }

          .vehicles-grid {
            grid-template-columns: 1fr;
          }

          .pagination {
            flex-wrap: wrap;
            gap: 0.5rem;
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
        <h1>Our Inventory</h1>
        <p>Discover premium vehicles curated for discerning buyers</p>
      </div>

      <main>
        <div className="inventory-container">
          <aside className="filters">
            <h3>Filters</h3>
            <div className="filter-group">
              <label htmlFor="price">Price Range</label>
              <select id="price">
                <option>All Prices</option>
                <option>Under $30,000</option>
                <option>$30,000 - $50,000</option>
                <option>$50,000 - $75,000</option>
                <option>Over $75,000</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="year">Year</label>
              <select id="year">
                <option>All Years</option>
                <option>2023 & Newer</option>
                <option>2021 - 2023</option>
                <option>2018 - 2021</option>
                <option>2015 - 2018</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="type">Vehicle Type</label>
              <select id="type">
                <option>All Types</option>
                <option>Sedan</option>
                <option>SUV</option>
                <option>Coupe</option>
                <option>Wagon</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="fuel">Fuel Type</label>
              <select id="fuel">
                <option>All Types</option>
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
                      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                    />
                  </div>
                  <div className="vehicle-info">
                    <div className="vehicle-model">{vehicle.name}</div>
                    <div className="vehicle-price">{vehicle.price}</div>
                    <div className="vehicle-details">
                      <div>• {vehicle.miles} km</div>
                      <div>• {vehicle.type}</div>
                      <div>• {vehicle.info}</div>
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
        <p>
          &copy; 2025 DriveLine Motors. All rights reserved. | <a href="/">Home</a> <a href="/inventory">Inventory</a>{" "}
          <a href="/contact">Contact</a>
        </p>
      </footer>
    </>
  )
}
