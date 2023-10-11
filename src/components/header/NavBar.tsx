import '../../Styles/Navbar.css'

import NavLinks from './links'
import Logo from './logo'

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <NavLinks />
    </nav>
  )
}
