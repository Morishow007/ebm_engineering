import '../header/Navbar.css'
import ScrollEffect from './ScrollEffect'
import NavLinks from './links'
import Logo from './logo'

export const NavBar = () => {
  const scrolling = ScrollEffect()

  return (
    <nav className={'navbar'}>
      <div className={`navbar-container ${scrolling ? 'scrolling' : ''}`}>
        <div className="navbar-logo">
          <Logo />
        </div>
        <NavLinks />
      </div>
    </nav>
  )
}
