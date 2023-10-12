import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

type LinkPaths = {
  path: string
  label: string
}

const links: LinkPaths[] = [
  {
    path: ROUTES.landingPage.path,
    label: 'Home',
  },

  {
    path: ROUTES.about.path,
    label: 'Produtos e Serviços',
  },

  {
    path: ROUTES.contactUs.path,
    label: 'Contact',
  },
]

const NavLinks = () => {
  return (
    <ul className="navbar-menu">
      {links.map((item) => (
        <li key={'link' + item.path}>
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks
