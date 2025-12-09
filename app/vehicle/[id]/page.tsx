"use client"

import { useState, use } from "react"
import { 
  MapPin, 
  Settings2, 
  Fuel, 
  Check, 
  ClipboardList, 
  Zap, 
  Timer, 
  Gauge, 
  Calendar, 
  Car,
  ShieldCheck,
  ChevronRight 
} from "lucide-react"

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
        
        /* MAIN CONTAINER */
        main {
          max-width: 1280px;
          margin: 0 auto;
          padding: 2rem;
        }

        /* BREADCRUMB */
        .breadcrumb {
          margin-bottom: 2rem;
          font-size: 0.85rem;
          color: #8899a6;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .breadcrumb a {
          color: #b0b0b0;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .breadcrumb a:hover {
          color: #ff6b35;
        }

        .breadcrumb span {
          color: #ffffff;
          font-weight: 500;
        }

        /* IMAGE GALLERY SECTION */
        .gallery-section {
          margin-bottom: 2.5rem;
          display: grid;
          grid-template-columns: 1fr 100px;
          gap: 1rem;
        }

        .main-image {
          width: 100%;
          height: 500px;
          background: #0d1b2a;
          border-radius: 4px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .main-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .main-image:hover img {
          transform: scale(1.02);
        }

        /* THUMBNAIL GALLERY */
        .thumbnail-gallery {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .thumbnail {
          width: 100px;
          height: 100px;
          background: #0d1b2a;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          border: 1px solid rgba(255, 255, 255, 0.1);
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
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .thumbnail:hover {
          border-color: #ff6b35;
          transform: translateY(-2px);
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
          gap: 2.5rem;
        }

        /* VEHICLE HEADER */
        .vehicle-header {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 2rem;
        }

        .vehicle-title {
          font-size: 2.5rem;
          font-weight: 300;
          color: #ffffff;
          margin-bottom: 0.5rem;
          letter-spacing: -0.5px;
          line-height: 1.1;
        }

        .vehicle-price {
          font-size: 2rem;
          font-weight: 600;
          color: #ff6b35;
          margin-bottom: 1rem;
        }

        .vehicle-subtitle {
          font-size: 0.95rem;
          color: #8899a6;
          margin-bottom: 1.5rem;
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .subtitle-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status-badges {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 107, 53, 0.05);
          color: #ff6b35;
          padding: 0.5rem 1rem;
          border-radius: 2px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          border: 1px solid rgba(255, 107, 53, 0.2);
        }

        .status-badge.premium {
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid rgba(255, 107, 53, 0.3);
        }

        /* DESCRIPTION */
        .description {
          font-size: 1rem;
          line-height: 1.8;
          color: #b0b0b0;
          font-weight: 300;
        }

        /* SPECS GRID - ENHANCED */
        .specs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding: 2rem;
          background: rgba(13, 27, 42, 0.4);
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          text-align: center;
          padding: 1rem;
          background: rgba(11, 22, 34, 0.5);
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.03);
          transition: all 0.3s ease;
        }

        .spec-item:hover {
          background: rgba(13, 27, 42, 0.8);
          transform: translateY(-2px);
          border-color: rgba(255, 107, 53, 0.2);
        }

        .spec-icon {
          font-size: 1.5rem;
          color: #ff6b35;
          margin-bottom: 0.25rem;
        }

        .spec-label {
          font-size: 0.7rem;
          color: #8899a6;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .spec-value {
          font-size: 1.1rem;
          color: #ffffff;
          font-weight: 500;
        }

        /* FEATURES */
        .features-section h3,
        .history-section h3 {
          font-size: 1.4rem;
          font-weight: 300;
          color: #ffffff;
          margin-bottom: 1.5rem;
          letter-spacing: -0.2px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: rgba(13, 27, 42, 0.3);
          border-radius: 4px;
          border-left: 2px solid #ff6b35;
          transition: all 0.2s ease;
          border: 1px solid rgba(255, 255, 255, 0.03);
          border-left: 2px solid #ff6b35;
        }

        .feature-item:hover {
          background: rgba(13, 27, 42, 0.6);
          transform: translateX(4px);
        }

        .feature-icon {
          color: #ff6b35;
          font-weight: bold;
          font-size: 1rem;
          flex-shrink: 0;
        }

        .feature-text {
          color: #b0b0b0;
          font-size: 0.9rem;
        }

        /* HISTORY SECTION */
        .history-section {
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .history-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .history-item {
          padding: 1.5rem;
          background: rgba(13, 27, 42, 0.3);
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: all 0.3s ease;
        }

        .history-item:hover {
          background: rgba(13, 27, 42, 0.6);
          border-color: rgba(255, 107, 53, 0.2);
        }

        .history-item h4 {
          font-size: 0.75rem;
          color: #ff6b35;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
          font-weight: 700;
        }

        .history-item p {
          font-size: 0.95rem;
          color: #e0e0e0;
          font-weight: 400;
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
          background: rgba(13, 27, 42, 0.4);
          padding: 2rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }

        .sidebar-card h4 {
          font-size: 0.9rem;
          font-weight: 700;
          color: #ff6b35;
          margin-bottom: 1.5rem;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .info-item:last-child {
          border-bottom: none;
        }

        .info-label {
          color: #8899a6;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .info-value {
          color: #ffffff;
          font-weight: 600;
          font-size: 0.95rem;
        }

        /* CTA BUTTONS */
        .cta-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 1rem 1.5rem;
          background: linear-gradient(135deg, #ff6b35 0%, #ff8555 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.85rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
          text-align: center;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.2);
        }

        .btn:hover {
          background: linear-gradient(135deg, #ff8555 0%, #ff6b35 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 107, 53, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: #ff6b35;
          border: 1px solid #ff6b35;
          box-shadow: none;
        }

        .btn-secondary:hover {
          background: rgba(255, 107, 53, 0.05);
          border-color: #ffa366;
          color: #ffa366;
        }

        .btn-outline {
          background: transparent;
          color: #8899a6;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: none;
        }

        .btn-outline:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: #ffffff;
          color: #ffffff;
        }

        /* FOOTER */
        footer {
          background: #0b1622;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4rem 2rem 2rem;
          color: #8899a6;
          font-size: 0.9rem;
          margin-top: 5rem;
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
        @media (max-width: 1200px) {
          .content-wrapper {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .sidebar {
            position: static;
          }

          .specs-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 900px) {
          .specs-grid {
            grid-template-columns: repeat(2, 1fr);
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
            grid-template-columns: 1fr;
            padding: 1.5rem;
            gap: 1rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-item {
            padding: 1rem;
          }

          .gallery-section {
            grid-template-columns: 1fr;
            gap: 0.75rem;
          }

          .thumbnail-gallery {
            flex-direction: row;
            overflow-x: auto;
            padding-bottom: 0.5rem;
          }

          .thumbnail {
            width: 80px;
            height: 80px;
            flex-shrink: 0;
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
          <a href="/">Home</a> 
          <ChevronRight className="w-4 h-4 text-[#5d707f]" />
          <a href="/inventory">Collection</a> 
          <ChevronRight className="w-4 h-4 text-[#5d707f]" />
          <span>{vehicle.year} {vehicle.make} {vehicle.model}</span>
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
                <span className="subtitle-item"><MapPin className="w-4 h-4 text-[#ff6b35]" /> {vehicle.color}</span>
                <span className="subtitle-item"><Settings2 className="w-4 h-4 text-[#ff6b35]" /> {vehicle.transmission}</span>
                <span className="subtitle-item"><Fuel className="w-4 h-4 text-[#ff6b35]" /> {vehicle.fuel}</span>
              </div>
              <div className="status-badges">
                <span className="status-badge premium"><Check className="w-3 h-3 mr-1" /> {vehicle.condition}</span>
                <span className="status-badge"><ClipboardList className="w-3 h-3 mr-1" /> {vehicle.warranty}</span>
              </div>
            </div>

            <p className="description">{vehicle.description}</p>

            {/* SPECS GRID */}
            <div className="specs-grid">
              <div className="spec-item">
                <div className="flex justify-center"><Zap className="spec-icon" /></div>
                <div className="spec-label">Horsepower</div>
                <div className="spec-value">{vehicle.horsepower} HP</div>
              </div>
              <div className="spec-item">
                <div className="flex justify-center"><Timer className="spec-icon" /></div>
                <div className="spec-label">0-60 Acceleration</div>
                <div className="spec-value">{vehicle.accel}</div>
              </div>
              <div className="spec-item">
                <div className="flex justify-center"><Fuel className="spec-icon" /></div>
                <div className="spec-label">Range / MPG</div>
                <div className="spec-value">{vehicle.fuel === "Electric" ? vehicle.range : vehicle.mpg}</div>
              </div>
              <div className="spec-item">
                <div className="flex justify-center"><Gauge className="spec-icon" /></div>
                <div className="spec-label">Kilometer</div>
                <div className="spec-value">{vehicle.mileage.toLocaleString()} km</div>
              </div>
              <div className="spec-item">
                <div className="flex justify-center"><Calendar className="spec-icon" /></div>
                <div className="spec-label">Year</div>
                <div className="spec-value">{vehicle.year}</div>
              </div>
              <div className="spec-item">
                <div className="flex justify-center"><Car className="spec-icon" /></div>
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
                    <Check className="feature-icon" />
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