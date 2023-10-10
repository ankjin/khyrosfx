import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from "./components/pages/HomePage";
import { AboutUs } from "./components/pages/AboutUs";
import { Brokers } from './components/pages/Brokers';
import { OurPerformance } from './components/pages/OurPerformance';
import { ContactForms } from './components/pages/ContactForms';

const router = createBrowserRouter([
    {
      index: true,
      element: (
          <HomePage />
      )
    },
    {
      path: '/about-us',
      element: (
          <AboutUs />
      )
    },
    {
      path: '/brokers',
      element: (
          <Brokers />
      )
    },
    {
      path: '/our-performance',
      element: (
          <OurPerformance />
      )
    },
    {
      path: '/contact-forms',
      element: (
          <ContactForms />
      )
    }
])

export default router