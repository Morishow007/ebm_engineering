import { Outlet } from 'react-router-dom'
import './Styles/Global.css'
import { Footer } from './components/footer/Footer'
import { NavBar } from './components/header/NavBar'
export default function App() {
  return (
    <>
      <div className="mainContainer">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  )
}
