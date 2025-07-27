import { NavLink } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import './Header.scss'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">EXPLORE</div>
        <nav className="header__nav">
          <NavLink to="/" className="nav__link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav__link">
            About
          </NavLink>
          <NavLink to="/tour" className="nav__link">
            Tour
          </NavLink>
          <NavLink to="/hotels" className="nav__link">
            Hotels
          </NavLink>
          <NavLink to="/blog" className="nav__link">
            Blog
          </NavLink>
          <NavLink to="/contact" className="nav__link">
            Contact
          </NavLink>
          <div className="nav__icon">
            <CiSearch />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
