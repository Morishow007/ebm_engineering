import { Outlet } from 'react-router-dom'
import './Styles/Global.css'
import { Header } from './components/header'
export default function App() {
  return (
    <>
      <Header />
      <div className="mainContainer">
        <Outlet />
      </div>
      <p>Footer</p>
    </>
  )
}
