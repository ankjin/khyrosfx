import { TopHeader } from "./TopHeader";
import { useState } from 'react'
import { FooterSimple } from "./FooterSimple";

const navigation = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Brokers', href: '/brokers' },
    { name: 'Our Performance', href: '/our-performance' },
    { name: 'Company', href: '/page_three' },
  ]


//   const features = [
//     {
//       name: 'Push to deploy',
//       description:
//         'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
//       icon: "CloudArrowUpIcon",
//     },
//     {
//       name: 'SSL certificates',
//       description:
//         'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
//       icon: "LockClosedIcon",
//     },
//     {
//       name: 'Simple queues',
//       description:
//         'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
//       icon: "ArrowPathIcon",
//     },
//     {
//       name: 'Advanced security',
//       description:
//         'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
//       icon: "FingerPrintIcon",
//     },
//   ]

//   const tiers = [
//     {
//       name: 'Freelancer',
//       id: 'tier-freelancer',
//       href: '#',
//       priceMonthly: '$24',
//       description: 'The essentials to provide your best work for clients.',
//       features: ['5 products', 'Up to 1,000 subscribers', 'Basic analytics', '48-hour support response time'],
//       mostPopular: false,
//     },
//     {
//       name: 'Startup',
//       id: 'tier-startup',
//       href: '#',
//       priceMonthly: '$32',
//       description: 'A plan that scales with your rapidly growing business.',
//       features: [
//         '25 products',
//         'Up to 10,000 subscribers',
//         'Advanced analytics',
//         '24-hour support response time',
//         'Marketing automations',
//       ],
//       mostPopular: true,
//     },
//     {
//       name: 'Enterprise',
//       id: 'tier-enterprise',
//       href: '#',
//       priceMonthly: '$48',
//       description: 'Dedicated support and infrastructure for your company.',
//       features: [
//         'Unlimited products',
//         'Unlimited subscribers',
//         'Advanced analytics',
//         '1-hour, dedicated support response time',
//         'Marketing automations',
//       ],
//       mostPopular: false,
//     },
//   ]

//   const faqs = [
//     {
//       id: 1,
//       question: "What's the best thing about Switzerland?",
//       answer:
//         "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
//     },
//     // More questions...
//   ]

//   const footerNavigation = {
//     solutions: [
//       { name: 'Hosting', href: '#' },
//       { name: 'Data Services', href: '#' },
//       { name: 'Uptime Monitoring', href: '#' },
//       { name: 'Enterprise Services', href: '#' },
//     ],
//     support: [
//       { name: 'Pricing', href: '#' },
//       { name: 'Documentation', href: '#' },
//       { name: 'Guides', href: '#' },
//       { name: 'API Reference', href: '#' },
//     ],
//     company: [
//       { name: 'About', href: '#' },
//       { name: 'Blog', href: '#' },
//       { name: 'Jobs', href: '#' },
//       { name: 'Press', href: '#' },
//       { name: 'Partners', href: '#' },
//     ],
//     legal: [
//       { name: 'Claim', href: '#' },
//       { name: 'Privacy', href: '#' },
//       { name: 'Terms', href: '#' },
//     ],
//   }
  
//   function classNames(...classes) {
//     return classes.filter(Boolean).join(' ')
//   }

export function PageLayout({children}) {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <TopHeader
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigation={navigation}
      />

      <main className="isolate">
        {children}
      </main>

        <FooterSimple />
      {/* <Footer footerNavigation={footerNavigation} /> */}
    </div>
  );
}
