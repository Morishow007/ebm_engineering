import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { About } from '../pages/About'
import { AboutDetails } from '../pages/About/AboutDetails'
import { ErrorPage } from '../pages/Error'
import { LandingPage } from '../pages/LandingPage'

export const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <LandingPage />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/about/:id',
          element: <AboutDetails />,
        },
      ],
    },
  ])

  return router
}
