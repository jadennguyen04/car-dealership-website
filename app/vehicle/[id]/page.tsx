"use client"

import { useState, use } from "react"

export default function VehicleDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [selectedImage, setSelectedImage] = useState(0)

  const vehicles: Record<string, any> = {
    "1": {
      id: "1",
      year: 2023,
      make: "Audi",
      model: "S3",
      price: 68900,
      miles: "19,960",
      transmission: "Automatic",
      fuel: "Diesel",
      bodyType: "Sedan",
      color: "Black Mythos Metallic",
      interior: "Black Premium",
      mileage: "19,960",
      mpg: "127 MPGe",
      horsepower: 450,
      range: "405 miles",
      accel: "3.1 sec (0-60)",
      features: [
        "Autopilot with Full Self-Driving Capability",
        "Premium Audio System",
        "Panoramic Glass Roof",
        "Heated Seats & Steering Wheel",
        "Power Adjustable Suspension",
        "17-inch Überturbine Wheels",
        "All-Weather Tires",
        "Integrated Navigation System",
        "Supercharging Access",
        "Over-the-Air Updates",
      ],
      description:
        "This 2023 Audi S3 represents the pinnacle of  luxury sedans. With advanced autonomous driving features and exceptional performance, it offers an unparalleled driving experience.",
      condition: "Premium - Like New",
      warranty: "Factory warranty through 2027",
      images: [
        "/audis3.jpg",
        "/audis3_1.jpg",
        "/audis3_2.jpg",
        "/audis3_3.jpg",

      ],
      history: {
        serviceRecords: "Complete service history available",
        accidents: "No accidents reported",
        ownership: "Single owner",
        carfax: "Clean carfax report",
      },
    },
    "2": {
      id: "2",
      year: 2022,
      make: "BMW",
      model: "M440i",
      price: 56200,
      miles: 18900,
      transmission: "Automatic",
      fuel: "Gasoline",
      bodyType: "Sedan",
      color: "Purple Metallic",
      interior: "Black Leather",
      mileage: 18900,
      mpg: "24 city / 33 highway",
      horsepower: 382,
      range: "450 miles",
      accel: "4.5 sec (0-60)",
      features: [
        "M Sport Package",
        "Adaptive M Suspension",
        "Harman Kardon Premium Sound",
        "Panoramic Sunroof",
        "Heated & Ventilated Seats",
        "19-inch M Alloy Wheels",
        "Adaptive LED Headlights",
        "Premium Navigation System",
        "Apple CarPlay & Android Auto",
        "Ambient Lighting",
      ],
      description:
        "This 2022 BMW M440i combines dynamic performance with luxurious comfort. The powerful inline-6 engine delivers thrilling acceleration while maintaining refined handling.",
      condition: "Excellent",
      warranty: "BMW Extended Warranty Available",
      images: [
        "/bmwm440i.jpg",
        "/bmwm440i_1.jpg",
        "/bmwm440i_2.jpg",
        "/bmwm440i_3.jpg",
      ],
      history: {
        serviceRecords: "Full BMW service records",
        accidents: "No accidents",
        ownership: "Single owner",
        carfax: "Clean title",
      },
    },
    "3": {
      id: "3",
      year: 2023,
      make: "Mercedes-Benz",
      model: "C-Class",
      price: 52500,
      miles: 8200,
      transmission: "Automatic",
      fuel: "Gasoline",
      bodyType: "Sedan",
      color: "Red Metallic",
      interior: "Black Leather",
      mileage: 8200,
      mpg: "25 city / 36 highway",
      horsepower: 255,
      range: "420 miles",
      accel: "5.8 sec (0-60)",
      features: [
        "AMG Line Package",
        "AIRMATIC Suspension",
        "Burmester Premium Sound",
        "Panoramic Sunroof",
        "Heated Seats with Massage Function",
        "19-inch AMG Wheels",
        "LED Intelligent Light System",
        "MBUX Infotainment System",
        "360-Degree Camera",
        "Premium Package",
      ],
      description:
        "This elegant 2023 Mercedes-Benz C-Class showcases timeless luxury with modern technology. Factory warranty included with exceptional condition throughout.",
      condition: "Premium - Like New",
      warranty: "Factory warranty through 2027",
      images: [
        "/mercc.jpg",
        "/mercc_1.jpg",
        "/mercc_2.jpg",
        "/mercc_3.jpg",
      ],
      history: {
        serviceRecords: "Factory service records",
        accidents: "No accidents reported",
        ownership: "Single owner",
        carfax: "Clean carfax",
      },
    },
  }

  const vehicle = vehicles[String(id)] || vehicles["1"]

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', 'Roboto', sans-serif;
          color: #f5f5f5;
          background: #0d1b2a;
          line-height: 1.6;
        }


        /* HEADER & NAVIGATION */
        header {
          background: rgba(13, 27, 42, 0.95);
          border-bottom: 2px solid #ff6b35;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 8px 32px rgba(255, 107, 53, 0.15);
          backdrop-filter: blur(10px);
        }

        nav {
          max-width: 1600px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ff6b35;
          text-decoration: none;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        nav ul {
          list-style: none;
          display: flex;
          gap: 2.5rem;
        }

        nav a {
          text-decoration: none;
          color: #f5f5f5;
          font-size: 0.9rem;
          font-weight: 600;
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

        nav a:hover::after {
          width: 100%;
        }

        nav a:hover {
          color: #ff6b35;
        }

        /* MAIN CONTAINER */
        main {
          max-width: 1600px;
          margin: 0 auto;
          padding: 2rem;
        }

        /* BREADCRUMB */
        .breadcrumb {
          margin-bottom: 2rem;
          font-size: 0.85rem;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .breadcrumb a {
          color: #ff6b35;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .breadcrumb a:hover {
          color: #ffa366;
        }

        /* IMAGE GALLERY SECTION */
        .gallery-section {
          margin-bottom: 3rem;
          display: grid;
          grid-template-columns: 1fr 120px;
          gap: 1.5rem;
        }

        .main-image {
          width: 100%;
          height: 600px;
          background: linear-gradient(135deg, #1a3a52 0%, #0d1b2a 100%);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 2px solid rgba(255, 107, 53, 0.3);
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .main-image:hover img {
          transform: scale(1.02);
        }

        /* THUMBNAIL GALLERY */
        .thumbnail-gallery {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .thumbnail {
          width: 120px;
          height: 120px;
          background: #1a3a52;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          border: 3px solid #333;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumbnail.active {
          border-color: #ff6b35;
          box-shadow: 0 4px 20px rgba(255, 107, 53, 0.4);
          transform: scale(1.05);
        }

        .thumbnail:hover {
          border-color: #ff6b35;
          transform: scale(1.08);
        }

        /* CONTENT GRID */
        .content-wrapper {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        /* LEFT COLUMN - DETAILS */
        .details-section {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        /* VEHICLE HEADER */
        .vehicle-header {
          border-bottom: 2px solid rgba(255, 107, 53, 0.2);
          padding-bottom: 2rem;
        }

        .vehicle-title {
          font-size: 3rem;
          font-weight: 300;
          color: #ffffff;
          margin-bottom: 0.75rem;
          letter-spacing: -1px;
          line-height: 1.1;
        }

        .vehicle-price {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ff6b35;
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        .vehicle-subtitle {
          font-size: 1.05rem;
          color: #aaa;
          margin-bottom: 1.5rem;
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .subtitle-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status-badges {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 107, 53, 0.1);
          color: #ff6b35;
          padding: 0.625rem 1.5rem;
          border-radius: 25px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          border: 1px solid rgba(255, 107, 53, 0.3);
        }

        .status-badge.premium {
          background: linear-gradient(135deg, rgba(255, 107, 53, 0.2) 0%, rgba(255, 107, 53, 0.1) 100%);
          color: #ff6b35;
          border: 1px solid rgba(255, 107, 53, 0.4);
        }

        /* DESCRIPTION */
        .description {
          font-size: 1.05rem;
          line-height: 1.9;
          color: #ccc;
        }

        /* SPECS GRID - ENHANCED */
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          padding: 2.5rem;
          background: linear-gradient(135deg, rgba(26, 58, 82, 0.3) 0%, rgba(13, 27, 42, 0.5) 100%);
          border-radius: 12px;
          border: 2px solid rgba(255, 107, 53, 0.2);
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-align: center;
          padding: 1.5rem;
          background: rgba(255, 107, 53, 0.05);
          border-radius: 8px;
          border: 1px solid rgba(255, 107, 53, 0.1);
          transition: all 0.3s ease;
        }

        .spec-item:hover {
          background: rgba(255, 107, 53, 0.1);
          transform: translateY(-4px);
          border-color: rgba(255, 107, 53, 0.3);
        }

        .spec-icon {
          font-size: 2rem;
          color: #ff6b35;
        }

        .spec-label {
          font-size: 0.75rem;
          color: #888;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          font-weight: 700;
        }

        .spec-value {
          font-size: 1.35rem;
          color: #ffffff;
          font-weight: 600;
          line-height: 1.3;
        }

        /* FEATURES */
        .features-section h3,
        .history-section h3 {
          font-size: 1.75rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 2rem;
          letter-spacing: -0.5px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: rgba(26, 58, 82, 0.3);
          border-radius: 8px;
          border-left: 4px solid #ff6b35;
          transition: all 0.3s ease;
          border: 2px solid rgba(255, 107, 53, 0.2);
          border-left: 4px solid #ff6b35;
        }

        .feature-item:hover {
          background: rgba(26, 58, 82, 0.5);
          transform: translateX(8px);
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.15);
          border-color: rgba(255, 107, 53, 0.4);
        }

        .feature-icon {
          color: #ff6b35;
          font-weight: bold;
          font-size: 1.3rem;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .feature-text {
          color: #ccc;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        /* HISTORY SECTION */
        .history-section {
          padding-top: 2rem;
          border-top: 2px solid rgba(255, 107, 53, 0.2);
        }

        .history-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .history-item {
          padding: 1.5rem;
          background: rgba(26, 58, 82, 0.3);
          border-radius: 8px;
          border: 2px solid rgba(255, 107, 53, 0.2);
          transition: all 0.3s ease;
        }

        .history-item:hover {
          background: rgba(26, 58, 82, 0.5);
          border-color: rgba(255, 107, 53, 0.4);
          transform: translateY(-4px);
        }

        .history-item h4 {
          font-size: 0.85rem;
          color: #ff6b35;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.75rem;
          font-weight: 700;
        }

        .history-item p {
          font-size: 1rem;
          color: #f5f5f5;
          font-weight: 500;
        }

        /* RIGHT COLUMN - SIDEBAR */
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          height: fit-content;
          position: sticky;
          top: 100px;
        }

        .sidebar-card {
          background: rgba(26, 58, 82, 0.4);
          padding: 2rem;
          border-radius: 12px;
          border: 2px solid rgba(255, 107, 53, 0.2);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .sidebar-card:hover {
          border-color: rgba(255, 107, 53, 0.4);
          background: rgba(26, 58, 82, 0.6);
        }

        .sidebar-card h4 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.75rem;
          letter-spacing: -0.3px;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 1px;
          color: #ff6b35;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 107, 53, 0.1);
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .info-label {
          color: #888;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .info-value {
          color: #f5f5f5;
          font-weight: 700;
          font-size: 1rem;
        }

        /* CTA BUTTONS */
        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1.1rem 1.5rem;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8555 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.9rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          text-align: center;
          text-transform: uppercase;
          box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
        }

        .btn:hover {
          background: linear-gradient(135deg, #ff8555 0%, #ff6b35 100%);
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(255, 107, 53, 0.4);
        }

        .btn-secondary {
          background: transparent;
          color: #ff6b35;
          border: 2px solid #ff6b35;
          box-shadow: none;
        }

        .btn-secondary:hover {
          background: rgba(255, 107, 53, 0.1);
          border-color: #ffa366;
          color: #ffa366;
        }

        .btn-outline {
          background: transparent;
          color: #ff6b35;
          border: 2px solid #ff6b35;
          box-shadow: none;
        }

        .btn-outline:hover {
          background: rgba(255, 107, 53, 0.2);
          border-color: #ffa366;
          color: #ffa366;
        }

        /* FOOTER */
        footer {
          background: #0d1b2a;
          color: #f5f5f5;
          padding: 3rem 2rem;
          text-align: center;
          font-size: 0.85rem;
          margin-top: 5rem;
          border-top: 2px solid rgba(255, 107, 53, 0.2);
        }

        footer a {
          color: #ff6b35;
          text-decoration: none;
          margin: 0 1.5rem;
          transition: color 0.3s ease;
        }

        footer a:hover {
          color: #ffa366;
        }

        /* RESPONSIVE */
        @media (max-width: 1200px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .sidebar {
            position: static;
          }

          .specs-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .gallery-section {
            grid-template-columns: 1fr;
          }

          .thumbnail-gallery {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .thumbnail {
            flex-shrink: 0;
          }
        }

        @media (max-width: 768px) {
          main {
            padding: 1.5rem;
          }

          .vehicle-title {
            font-size: 2rem;
          }

          .vehicle-price {
            font-size: 1.75rem;
          }

          .main-image {
            height: 400px;
          }

          .specs-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .history-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
          }

          nav ul {
            gap: 1.5rem;
          }

          .vehicle-subtitle {
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          main {
            padding: 1rem;
          }

          .vehicle-title {
            font-size: 1.5rem;
          }

          .vehicle-price {
            font-size: 1.35rem;
          }

          .main-image {
            height: 300px;
          }

          .sidebar-card {
            padding: 1.5rem;
          }

          .specs-grid {
            padding: 1.5rem;
            gap: 1rem;
          }

          .feature-item {
            padding: 1rem;
          }

          nav {
            padding: 1rem;
          }

          .logo {
            font-size: 1.15rem;
          }

          .gallery-section {
            gap: 0.75rem;
          }

          .thumbnail {
            width: 80px;
            height: 80px;
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
        <div className="breadcrumb">
          <a href="/">Home</a> / <a href="/inventory">Inventory</a> / {vehicle.year} {vehicle.make} {vehicle.model}
        </div>

        {/* GALLERY */}
        <div className="gallery-section">
          <div className="main-image">
            <img
              src={vehicle.images[selectedImage] || "/placeholder.svg"}
              alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
            />
          </div>
          <div className="thumbnail-gallery">
            {vehicle.images.map((image: string, index: number) => (
              <div
                key={index}
                className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                onClick={() => setSelectedImage(index)}
              >
                <img src={image || "/placeholder.svg"} alt={`View ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="content-wrapper">
          {/* LEFT COLUMN */}
          <div className="details-section">
            <div className="vehicle-header">
              <h1 className="vehicle-title">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </h1>
              <div className="vehicle-price">${vehicle.price.toLocaleString()}</div>
              <div className="vehicle-subtitle">
                <span className="subtitle-item">📍 {vehicle.color}</span>
                <span className="subtitle-item">⚙️ {vehicle.transmission}</span>
                <span className="subtitle-item">🛢️ {vehicle.fuel}</span>
              </div>
              <div className="status-badges">
                <span className="status-badge premium">✓ {vehicle.condition}</span>
                <span className="status-badge">📋 {vehicle.warranty}</span>
              </div>
            </div>

            <p className="description">{vehicle.description}</p>

            {/* SPECS GRID */}
            <div className="specs-grid">
              <div className="spec-item">
                <div className="spec-icon">⚡</div>
                <div className="spec-label">Horsepower</div>
                <div className="spec-value">{vehicle.horsepower} HP</div>
              </div>
              <div className="spec-item">
                <div className="spec-icon">🚗</div>
                <div className="spec-label">0-60 Acceleration</div>
                <div className="spec-value">{vehicle.accel}</div>
              </div>
              <div className="spec-item">
                <div className="spec-icon">🛣️</div>
                <div className="spec-label">Range / MPG</div>
                <div className="spec-value">{vehicle.fuel === "Electric" ? vehicle.range : vehicle.mpg}</div>
              </div>
              <div className="spec-item">
                <div className="spec-icon">📊</div>
                <div className="spec-label">Kilometer</div>
                <div className="spec-value">{vehicle.mileage.toLocaleString()} km</div>
              </div>
              <div className="spec-item">
                <div className="spec-icon">📅</div>
                <div className="spec-label">Year</div>
                <div className="spec-value">{vehicle.year}</div>
              </div>
              <div className="spec-item">
                <div className="spec-icon">🏎️</div>
                <div className="spec-label">Body Type</div>
                <div className="spec-value">{vehicle.bodyType}</div>
              </div>
            </div>

            {/* FEATURES */}
            <div className="features-section">
              <h3>Premium Features</h3>
              <div className="features-grid">
                {vehicle.features.map((feature: string, index: number) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div className="feature-text">{feature}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* HISTORY */}
            <div className="history-section">
              <h3>Vehicle History</h3>
              <div className="history-grid">
                <div className="history-item">
                  <h4>Service Records</h4>
                  <p>{vehicle.history.serviceRecords}</p>
                </div>
                <div className="history-item">
                  <h4>Accidents</h4>
                  <p>{vehicle.history.accidents}</p>
                </div>
                <div className="history-item">
                  <h4>Ownership</h4>
                  <p>{vehicle.history.ownership}</p>
                </div>
                <div className="history-item">
                  <h4>CarFax Report</h4>
                  <p>{vehicle.history.carfax}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - SIDEBAR */}
          <div className="sidebar">
            <div className="sidebar-card">
              <h4>Quick Info</h4>
              <div className="info-item">
                <span className="info-label">Price</span>
                <span className="info-value">${vehicle.price.toLocaleString()}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Transmission</span>
                <span className="info-value">{vehicle.transmission}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Fuel Type</span>
                <span className="info-value">{vehicle.fuel}</span>
              </div>
              <div className="info-item">
                <span className="info-label">Kilometers</span>
                <span className="info-value">{vehicle.mileage.toLocaleString()} km</span>
              </div>
              <div className="info-item">
                <span className="info-label">Interior</span>
                <span className="info-value">{vehicle.interior}</span>
              </div>
            </div>

            <div className="sidebar-card">
              <h4>Contact Dealer</h4>
              <div className="cta-buttons">
                <button className="btn">Schedule Test Drive</button>
                <button className="btn btn-secondary">Get Financing Info</button>
                <button className="btn btn-outline">Contact Dealership</button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <p>&copy; 2025 DriveLine Motors. All rights reserved.</p>
        <div>
          <a href="/">Home</a>
          <a href="/inventory">Inventory</a>
          <a href="/contact">Contact</a>
        </div>
      </footer>
    </>
  )
}
