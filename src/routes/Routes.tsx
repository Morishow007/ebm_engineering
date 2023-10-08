import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { ROUTES } from '../constants/routes'
import { About } from '../pages/About'
import { AboutDetails } from '../pages/About/AboutDetails'
import { ContactUs } from '../pages/ContactUs'
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
          path: ROUTES.landingPage.path,
          element: <LandingPage />,
        },
        {
          path: ROUTES.about.path,
          element: <About />,
        },
        {
          path: ROUTES.aboutDetails.path,
          element: <AboutDetails />,
        },

        {
          path: ROUTES.contactUs.path,
          element: <ContactUs />,
        },
      ],
    },
  ])

  return router
}
