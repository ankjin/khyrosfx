import { NavLink } from "react-router-dom"
import { PageLayout } from "../common/PageLayout"

export function Brokers() {
    return (
        <PageLayout>
            <BrokerContent />
        </PageLayout>
    )
  }
  
  function BrokerContent() {
    return(
        <>
        {/* Hero section */}
        <div className="relative pt-14">





          <div className="py-24 sm:py-32">


              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">

                  <div className="mx-auto w-full max-w-xl lg:mx-0">
                    {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900">Trusted by the most innovative teams</h2> */}
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      A foreign exchange broker, also known as an FX broker or a forex broker, buys and sells currencies on behalf of clients while charging a commission for the service. Foreign exchange brokers are 'middlemen' who match the currency buy and sell orders from their clients to other clients orders.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                    We prefer you to work with below brokers as it will be easy for us to manage your accounts due to the similarities in Pairs, Spreads & Other Terms and conditions. However, if you wish to continue with your preferred broker, we are still open to collaborate with you.
                    </p>
                    <div className="mt-8 flex items-center gap-x-6">
                      <NavLink to="/contact-forms" className="text-sm font-semibold text-gray-900">
                        Contact us <span aria-hidden="true">&rarr;</span>
                      </NavLink>
                    </div>
                  </div>

                  <div className="bg-white">
                    <div className="my-10 mx-auto max-w-xl lg:max-w-none text-center">
                        <h2 className="font-display text-xl font-semibold text-neutral-950">Would you like open account with our preferred broker?</h2>
                    </div>
                    <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                      <a href="https://www.google.com" target="_blank" rel="noreferrer">
                        <img
                        className="max-h-12 w-full object-contain"
                        src="https://tailwindui.com/img/logos/tuple-logo-gray-900.svg"
                        alt="Tuple"
                        width={105}
                        height={48}
                        />
                      </a>
                      
                      <a href="https://www.google.com" target="_blank" rel="noreferrer">
                        <img
                          className="max-h-12 w-full object-contain"
                          src="https://tailwindui.com/img/logos/reform-logo-gray-900.svg"
                          alt="Reform"
                          width={104}
                          height={48}
                        />
                      </a>
                      <a href="https://www.google.com" target="_blank" rel="noreferrer">
                        <img
                          className="max-h-12 w-full object-contain"
                          src="https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg"
                          alt="SavvyCal"
                          width={140}
                          height={48}
                        />
                      </a>

                      <a href="https://www.google.com" target="_blank" rel="noreferrer">
                        <img
                          className="max-h-12 w-full object-contain"
                          src="https://tailwindui.com/img/logos/laravel-logo-gray-900.svg"
                          alt="Laravel"
                          width={136}
                          height={48}
                        />
                      </a>

                    </div>
                  </div>


                </div>
              </div>



           


          </div>






        </div>
  
      </>
    )
  }