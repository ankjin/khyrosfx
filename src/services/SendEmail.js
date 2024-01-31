import { GetApiToken } from "./GetApiToken";

export async function SendEmail({fomrsModel, setLoading, setFirstName, setLastName, setPhoneNumber, setEmailAddress, setMessage}, recaptchaToken) {

  const apiToken = await GetApiToken();
  console.log(recaptchaToken, " -----------recaptchaToken")
  console.log("fromsModel stringify: ", fomrsModel);

  const bdy = {
    "FirstName": fomrsModel.firstName,
    "LastName": fomrsModel.lastName,
    "Mobile": fomrsModel.phoneNumber,
    "Email": fomrsModel.emailAddress,
    "FormSubject": "Inquiry from Website",
    "MessageBody": fomrsModel.message,
  }

  console.log("fromsModel Body: ", bdy);
  //console.log("fromsModel Stringyfy: ", bdy);
  async function Sendmail() {
    try {
        const requestOptions = {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiToken}`,
          },
          body: JSON.stringify(bdy)
          };
          const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}Fx/SendEmail?token=${recaptchaToken}`, requestOptions)
              
              //console.log(await res.text())
    
          // empty dependency array means this effect will only run once (like componentDidMount in classes)
    
      if(!res.ok) {
        throw new Error("Something went wrong with fetching movies...")
      }
      setFirstName("")   
      setLastName("")
      setPhoneNumber("")
      setEmailAddress("")
      setMessage("")
      console.log(res, "ressuullt")
      // const data = await res.json()
      // if(data.Response === 'False') {
      //   throw new Error("Movie not found.")
      // }
      //console.log(data, "looogggg data")
      //console.log(movies) // return empty as it is in stale(or previous value) state
    } catch (err) {
      if(err.name !== "AbortError") {
      console.error(err.message, "not abort error")
      }
    } finally {
      console.log("finally...")
      setLoading(false)

    }
  }
  Sendmail()
}
