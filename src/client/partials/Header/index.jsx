import { Link, NavLink, useLocation } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import './Header.scss'

function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <header className={isHome ? 'header transparent' : 'header solid'}>
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">EXPLORE</Link>
        </div>
        <nav className="header__nav">
          <ul className="nav__list">
            <li>
              <NavLink to="/" className="nav__link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav__link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/tours" className="nav__link">
                Tour
              </NavLink>
            </li>
            <li>
              <NavLink to="/hotels" className="nav__link">
                Hotels
              </NavLink>
            </li>

            <li className="nav__link--has-submenu">
              <NavLink to="/blog" className="nav__link">
                Blog
              </NavLink>
              <ul className="nav__submenu">
                <li>
                  <NavLink to="/blog/news" className="nav__submenu-link">
                    Blog News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog/related" className="nav__submenu-link">
                    Blog Related
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to="/contact" className="nav__link">
                Contact
              </NavLink>
            </li>
            <li className="nav__icon">
              <CiSearch />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
