import '../header/Navbar.css'
import ScrollEffect from './ScrollEffect'
import NavLinks from './links'
import Logo from './logo'

export const NavBar = () => {
  const scrolling = ScrollEffect()

  return (
    <nav className={`navbar ${scrolling ? 'scrolling' : ''}`}>
      <div className="navbar-logo">
        <Logo />
      </div>
      <NavLinks />
    </nav>
  )
}
