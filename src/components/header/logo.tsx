import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants/routes'

import logo from '../../images/EBM_nob.png'

const Logo = () => {
  return (
    <Link to={ROUTES.landingPage.path}>
      <img src={logo} alt="logo-engineering" />
    </Link>
  )
}

export default Logo
