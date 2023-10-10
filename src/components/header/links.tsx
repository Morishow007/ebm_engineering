import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

const NavLinks = () => {
  return (
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
  )
}

export default NavLinks
