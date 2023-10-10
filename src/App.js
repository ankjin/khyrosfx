

import { RouterProvider } from 'react-router-dom'
import router from './router'
// import {
//   ArrowPathIcon,
//   Bars3Icon,
//   CloudArrowUpIcon,
//   FingerPrintIcon,
//   LockClosedIcon,
//   XMarkIcon,
// } from '@heroicons/react/24/outline'
// import { CheckIcon } from '@heroicons/react/20/solid'
import './App.css';




function App() {

  

  return (

      <RouterProvider router={router} />

  );
}

export default App;
