import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

import logo from '../../components/header/EBM_logo.png'

const Logo = () => {
  return (
    <Link to={ROUTES.landingPage.path}>
      <img src={logo} alt="logo-engineering" />
    </Link>
  )
}

export default Logo
