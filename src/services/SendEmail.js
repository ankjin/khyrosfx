import { GetToken } from "./GetToken";

export async function SendEmail({fomrsModel}) {

  const tkn = await GetToken();
  

  async function Sendmail() {
    try {
    //   console.log(fomrsModel, "from sendEmail")
    
    
        const requestOptions = {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tkn,
          },
          body: JSON.stringify({
            "FirstName": fomrsModel.firstName,
            "LastName": fomrsModel.lastName,
            "Mobile": fomrsModel.phoneNumber,
            "Email": fomrsModel.emailAddress,
            "FormSubject": "Inquiry from Website",
            "MessageBody": fomrsModel.message,
          })

          };
          const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}Fx/SendEmail`, requestOptions)
              
              //console.log(await res.text())
    
          // empty dependency array means this effect will only run once (like componentDidMount in classes)
    
      if(!res.ok) {
        throw new Error("Something went wrong with fetching movies...")
      }
      const data = await res.json()
      if(data.Response === 'False') {
        throw new Error("Movie not found.")
      }
      console.log(data)
      //console.log(movies) // return empty as it is in stale(or previous value) state        
    } catch (err) {
      if(err.name !== "AbortError") {
      console.error(err.message)
      }
    } finally {
      console.log("finally...")
    }
  }
  Sendmail()
}
