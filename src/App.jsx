import { useState } from 'react'
import './App.css'

// Image Imports
import RepairsImg from './assets/images/Repairs.webp'
import ReplacementsImg from './assets/images/Replacements.webp'
import MaintenanceImg from './assets/images/Maintainance.webp'
import Service1 from './assets/images/Service1.webp'
import Service2 from './assets/images/Service2.webp'
import OurStoryImg from './assets/images/OurStory.webp'
import OurMissionImg from './assets/images/OurMission.webp'
import CustomService1 from "./assets/images/CustomService1.webp";
import CustomService2 from "./assets/images/CustomService2.webp";
import ContactUs from "./assets/images/ContactUs.webp";

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

      <section className="highlights-section">
  <div className="highlight">
    <div className="highlight-icon">💰</div>
    <h3>Free Estimates</h3>
    <p>
      Get a free, no-obligation quote and discover why customers rate us 5 stars
      for quality and service.
    </p>
  </div>

  <div className="highlight">
    <div className="highlight-icon">💬</div>
    <h3>Free Quotes</h3>
    <p>
      We make it easy — free quotes, fair pricing, and 5-star results every time.
    </p>
  </div>

  <div className="highlight">
    <div className="highlight-icon">⭐</div>
    <h3>5 Star Reviews</h3>
    <p>
      Rated 5 Stars by Happy Pool Owners — Trusted for Quality, Care, and Results.
    </p>
  </div>
</section>

<section className="about-section">
  <h2>About Us – Aqua Clean Pools</h2>
  <p className="subtitle">Family-Owned. Reliable. Built on Trust.</p>

  {/* === Our Story === */}
  <div className="about-container">
    <div className="about-text">
      <h3>Our Story</h3>
      <p>
        What started as a small, local business built on word-of-mouth and hard work
        has grown into a trusted name in pool and spa care. <b>Ruben Casas</b> founded
        Aqua Clean Pools with a simple goal: to give every customer the same level of
        care and attention he gives his own family’s pool.
      </p>
      <p>
        With <b>years</b> of hands-on experience in the pool industry, Ruben brings an eye for
        detail, technical know-how, and a genuine passion for helping customers enjoy safe,
        sparkling, and stress-free pools all year long.
      </p>
    </div>
    <div className="about-image">
      <img src={OurStoryImg} alt="Our Story" />
    </div>
  </div>

  {/* === Our Mission === */}
  <div className="about-container">
    <div className="about-image">
      <img src={OurMissionImg} alt="Our Mission" />
    </div>
    <div className="about-text">
      <h3>Our Mission</h3>
      <p>
        At <b>Aqua Clean Pools</b>, we believe that a clean pool means more than clear
        water—it means <b>peace of mind</b>. Our mission is to help families and property
        owners enjoy their pools and spas without worrying about maintenance, repairs,
        or chemical balance. You relax, we’ll handle the rest.
      </p>
    </div>
  </div>
</section>

{/* === Custom Services Section === */}
<section className="custom-services-section">
  <div className="custom-services-container">
    <div className="custom-text">
      <h3>For Custom Services</h3>
      <p>
        Every pool is unique — and so are your needs.<br />
        Our custom pool services are designed to fit.
      </p>
      <button className="custom-btn">Contact Us</button>
    </div>

    <div className="custom-images">
      <img src={CustomService1} alt="Custom pool service 1" />
      <img src={CustomService2} alt="Custom pool service 2" />
    </div>
  </div>
</section>

{/* === Contact Section === */}
<section className="contact-section">
  <div className="contact-container">
    <div className="contact-text">
      <h3>Contact Us</h3>
      <p>
        <span>📞</span> 714-604-8591
      </p>
      <p>
        <span>📧</span> info@aquacleanyourpool.com
      </p>
    </div>
    <div className="contact-image">
      <img src={ContactUs} alt="Contact Aqua Clean Pools" />
    </div>
  </div>
</section>


    </>
  )
}

export default App
