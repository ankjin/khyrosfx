
export function GetRecaptchaToken() {

    window.grecaptcha.ready(() => {
        window.grecaptcha.execute(process.env.REACT_APP_RECAPTCHA_SITEKEY, { action: 'submit' }).then(token => {
          
          console.log("start: ", token, " :g-receptcha-token")
          return token
          //submitData(token)
        });
      });



    //   const submitData = (tkn) => {
    //     // call a backend API to verify reCAPTCHA response
    //     fetch('https://localhost:7041/api/fx/verify', {
    //       method: 'POST',
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify({
    //         "gRecaptchaResponse": tkn
    //       })
    //     }).then(res => res.json()).then(res => {
    //       setLoading(false);
    //       setResponse(res);
    //     });
    //   }

}