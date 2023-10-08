import { Link } from 'react-router-dom'
import logo from '../../Images/Navbar/EBM_logo.png'
import '../../Styles/Navbar.css'
import { ROUTES } from '../../constants/routes'

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to={ROUTES.landingPage.path}>
          {/* Add the real logo when we have */}
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to={ROUTES.landingPage.path}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.about.path}>Produtos e Serviços</Link>
        </li>
        <li>
          <Link to={ROUTES.contactUs.path}>Contact</Link>
        </li>
      </ul>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
        <button type="button">Search</button>
      </div>
    </nav>
  )
}
