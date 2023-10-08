import { Outlet } from 'react-router-dom'
import './Styles/Global.css'
import { NavBar } from './components/header/NavBar'
export default function App() {
  return (
    <>
      <div className="mainContainer">
        <NavBar />
        <Outlet />
      </div>
      <p>Footer</p>
    </>
  )
}
