import { Link, NavLink, useLocation } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'

import './Header.scss'
import CartIcon from '../../components/Cart/CartIcon'

function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <header
      className={isHome ? 'header header--transparent' : 'header header--solid'}
    >
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">EXPLORE</Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink to="/" className="header__nav-link">
                Home
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/about" className="header__nav-link">
                About
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/tours" className="header__nav-link">
                Tour
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink to="/hotels" className="header__nav-link">
                Hotels
              </NavLink>
            </li>

            <li className="header__nav-item header__nav-item--has-submenu">
              <NavLink to="/blog" className="header__nav-link">
                Blog
              </NavLink>
              <ul className="header__submenu">
                <li className="header__submenu-item">
                  <NavLink to="/blog/news" className="header__submenu-link">
                    Blog News
                  </NavLink>
                </li>
                <li className="header__submenu-item">
                  <NavLink to="/blog/related" className="header__submenu-link">
                    Blog Related
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="header__icon">
              <CiSearch />
            </li>
            <li className="header__icon ">
              <CartIcon />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
