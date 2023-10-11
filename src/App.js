

import { RouterProvider } from 'react-router-dom'
import router from './router'
import { useEffect } from "react"
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



  // This is to Add Google ReCaptcha V3
  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);
   
      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }   
      if (isScriptExist && callback) callback();
    }   
    // load the script by passing the URL
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_RECAPTCHA_SITEKEY}`, function () {
      console.log("Script loaded!");
    });
  }, [])

  return (

      <RouterProvider router={router} />

  );
}

export default App;
