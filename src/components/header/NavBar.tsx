import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <h1>Navbar</h1>
      <Link to={'/'}>Home</Link>
      <Link to={'/About'}>About</Link>
    </>
  )
}
