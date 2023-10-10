import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from "./components/pages/HomePage";
import { PageOne } from "./components/pages/PageOne";
import { PageTwo } from './components/pages/PageTwo';
import { PageThree } from './components/pages/PageThree';

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
          <PageOne />
      )
    },
    {
      path: '/brokers',
      element: (
          <PageTwo />
      )
    },
    {
      path: '/our-performance',
      element: (
          <PageTwo />
      )
    },
    {
      path: '/page_three',
      element: (
          <PageThree/>
      )
    }
])

export default router