
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Activity, Menu, X } from 'lucide-react'

const links = [
  ['Home', '/'],
  ['Drivers', '/drivers'],
  ['Teams', '/teams'],
  ['Race Center', '/race-center'],
  ['History', '/history'],
  ['Analytics', '/analytics'],
  ['Prediction Lab', '/prediction-lab'],
  ['Circuits', '/circuits'],
  ['F1 Guide', '/guide'],
  ['Tech Lab', '/tech-lab'],
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="navbar">
      <NavLink to="/" className="brand" onClick={closeMenu}>
        <Activity size={25} />
        <span>
          RACE<span className="brand-accent">LAB</span>
        </span>
      </NavLink>

      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        type="button"
      >
        {isOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        {links.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            end={path === '/'}
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? 'nav-link active' : 'nav-link'
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
