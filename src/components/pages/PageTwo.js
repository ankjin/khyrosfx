import { PageLayout } from "../common/PageLayout"

export function PageTwo() {
    return (
        <PageLayout>
            <TwoContent />
        </PageLayout>
    )
  }
  
  function TwoContent() {
    return(
        <>
        {/* Hero section */}
        <div className="relative pt-14">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">


              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Deploy to the cloud with confidence Two
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                  lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                  fugiat aliqua.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="/"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started
                  </a>
                  <a
                    href="/"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

            <div className="mx-auto max-w-2xl lg:max-w-none">
    <div><h2 className="font-display text-2xl font-semibold text-neutral-950">You’re in good company</h2></div>
    <div className="mt-10">
        <div
            className="relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
           
        ></div>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
            <li className="group">
                <div className="overflow-hidden">
                    <div
                        className="pt-12 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
                    >
                        <img alt="Phobia" loading="lazy" width="184" height="36" decoding="async" data-nimg="1" src="/_next/static/media/logo-dark.353d4760.svg" />
                    </div>
                </div>
            </li>
            <li className="group">
                <div className="overflow-hidden">
                    <div
                        className="pt-12 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
                    >
                        <img alt="Family Fund" loading="lazy" width="184" height="36" decoding="async" data-nimg="1" src="/_next/static/media/logo-dark.7370ef3f.svg" />
                    </div>
                </div>
            </li>
            <li className="group">
                <div className="overflow-hidden">
                    <div
                        className="pt-12 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
                    >
                        <img alt="Unseal" loading="lazy" width="184" height="36" decoding="async" data-nimg="1" src="/_next/static/media/logo-dark.4785dd63.svg" />
                    </div>
                </div>
            </li>
            <li className="group">
                <div className="overflow-hidden">
                    <div
                        className="pt-12 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
                    >
                        <img alt="Mail Smirk" loading="lazy" width="184" height="36" decoding="async" data-nimg="1" src="/_next/static/media/logo-dark.ac5d2e8d.svg" />
                    </div>
                </div>
            </li>
            <li className="group">
                <div className="overflow-hidden">
                    <div
                        className="pt-12 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
                    >
                        <img alt="Home Work" loading="lazy" width="184" height="36" decoding="async" data-nimg="1" src="/_next/static/media/logo-dark.e87ae13a.svg" />
                    </div>
                </div>
            </li>
            <li className="group">
                <div className="overflow-hidden">
                    <div
                        className="pt-12 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
                    >
                        <img alt="Green Life" loading="lazy" width="184" height="36" decoding="async" data-nimg="1" src="/_next/static/media/logo-dark.645d638e.svg" />
                    </div>
                </div>
            </li>
            <li className="group">
                <div className="overflow-hidden">
                    <div
                        className="pt-12 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
                    >
                        <img alt="Bright Path" loading="lazy" width="184" height="36" decoding="async" data-nimg="1" src="/_next/static/media/logo-dark.1ff7dc9b.svg" />
                    </div>
                </div>
            </li>
            <li className="group">
                <div className="overflow-hidden">
                    <div
                        className="pt-12 group-[&amp;:nth-child(-n+2)]:-mt-px sm:group-[&amp;:nth-child(3)]:-mt-px lg:group-[&amp;:nth-child(4)]:-mt-px relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px"
                    >
                        <img alt="North Adventures" loading="lazy" width="184" height="36" decoding="async" data-nimg="1" src="/_next/static/media/logo-dark.ad8a4f58.svg" />
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>


            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
  
      </>
    )
  }