import { useState } from 'react'
import './App.css'

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

      {/* Main Content */}
      <div className="main-content">
        <h1>Welcome to Aqua Clean Pools</h1>
        <p>Professional pool care with a 5-star touch 💧</p>
      </div>
    </>
  )
}

export default App
