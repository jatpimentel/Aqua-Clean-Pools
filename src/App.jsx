import { useState } from 'react'
import './App.css'

// Image Imports
import RepairsImg from './assets/images/Repairs.webp'
import ReplacementsImg from './assets/images/Replacements.webp'
import MaintenanceImg from './assets/images/Maintainance.webp'
import Service1 from './assets/images/Service1.webp'
import Service2 from './assets/images/Service2.webp'

function App() {
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = ['Home', 'Services', 'About', 'Contact']

  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-section">
          <h2 className="brand-name">Aqua Clean Pools</h2>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className={active === item ? 'active' : ''}
                onClick={() => setActive(item)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="main-content">
        <div className="info-card">
          <p className="trusted-text">⭐⭐⭐⭐⭐ Trusted by 500+ pool owners</p>
          <h1>Discover Our Latest Pool Care Innovations</h1>
          <p className="description">
            Experience the newest range of cleaning tools, eco-friendly treatments,
            and advanced equipment designed to keep your pool crystal clear and hassle-free.
          </p>
          <button className="cta-btn">CONTACT US NOW!</button>
        </div>
      </div>

      {/* Services Section */}
      <section className="services-section">
        <h2>Browse Our Services</h2>
        <p className="subtitle">Everything Your Pool Needs — All in One Place.</p>

        <div className="services-grid">
          <div className="service-wrapper">
            <div className="service-card">
              <img src={RepairsImg} alt="Repairs" />
            </div>
            <h3>Repairs</h3>
          </div>

          <div className="service-wrapper">
            <div className="service-card">
              <img src={ReplacementsImg} alt="Replacements" />
            </div>
            <h3>Replacements</h3>
          </div>

          <div className="service-wrapper">
            <div className="service-card">
              <img src={MaintenanceImg} alt="Maintenance" />
            </div>
            <h3>Maintenance</h3>
          </div>
        </div>
      </section>

      {/* Services Detailed Section */}
      <section className="services-detailed">
        <h2>Services</h2>
        <p className="subtext">
          Rated 5 Stars by Happy Pool Owners — Find Everything Here.
        </p>

        <div className="service-pairs">
          <div className="service-pair">
            <div className="service-image">
              <img src={Service1} alt="Pool Service 1" />
            </div>
            <div className="service-text">
  <h3>We specialize in:</h3>
  <p>
    Whether you have a cozy backyard pool or manage a large commercial pool and spa,
    we bring the same care and professionalism to every job.
  </p>
  <ul>
    <li>Routine pool and spa cleaning</li>
    <li>Water testing and chemical balancing</li>
    <li>Equipment maintenance & repairs</li>
    <li>Filter cleaning and replacement</li>
  </ul>
</div>

          </div>

          <div className="service-pair">
            <div className="service-image">
              <img src={Service2} alt="Pool Service 2" />
            </div>
            <div className="service-text">
  <h3>We also offer:</h3>
  <p>
    Whether you own a relaxing backyard pool or oversee a busy commercial pool and spa,
    we deliver the same dedication, quality, and expertise to every project.
  </p>
  <ul>
    <li>Seasonal openings and closings</li>
    <li>Emergency pool service</li>
    <li>Residential and Commercial Pools and Spas</li>
  </ul>
</div>

          </div>
        </div>
      </section>
    </>
  )
}

export default App
