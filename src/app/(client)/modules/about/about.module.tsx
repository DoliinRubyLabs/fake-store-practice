'use client'

import Image from 'next/image'
import { FC } from 'react'

import { ContainerComponent } from '@/app/(client)/shared/ui/container'
import { Link } from '@/pkg/libraries/locale'

// interface
interface IProps {}

// component
const AboutModule: FC<Readonly<IProps>> = () => {
  // Grid items data
  const gridItems = [
    { title: 'We Research', description: 'We dig deep', image: '/icons/icon1.svg' },
    { title: 'We Compare', description: 'We organize', image: '/icons/icon2.svg' },
    { title: 'You Decide', description: 'Just the facts', image: '/icons/icon3.svg' },
    { title: 'Why Trust Us?', description: 'Independent team', image: '/icons/icon4.svg' },
    { title: 'Who We Help', description: 'Shoppers who want', image: '/icons/icon5.svg' },
    { title: 'Our Promise', description: 'Always on your side', image: '/icons/icon6.svg' },
  ]

  // return
  return (
    <main className='py-8 md:py-16'>
      <ContainerComponent>
        <div className='mx-auto max-w-4xl px-4 md:px-0'>
          {/* Hero Section */}
          <section className='mb-10 text-center md:mb-16'>
            <h1 className='mb-3 text-3xl font-bold md:mb-4 md:text-4xl'>About Us</h1>

            <h2 className='mb-4 text-xl font-semibold md:mb-6 md:text-2xl'>Making Smarter Shopping Simple</h2>

            <p className='mb-6 text-base md:mb-8 md:text-lg'>
              In today&apos;s world of endless product choices and aggressive marketing, it&apos;s easy to feel
              overwhelmed. That&apos;s where we come in.
            </p>
          </section>

          {/* Grid Section */}
          <section className='mb-10 md:mb-16'>
            <div className='grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8'>
              {gridItems.map((item, index) => (
                <div key={index} className='flex flex-col items-center rounded-lg bg-white p-3 md:p-4'>
                  <div className='mb-2 flex h-12 w-12 items-center justify-center sm:h-16 sm:w-16 md:mb-4 md:h-24 md:w-24'>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={64}
                      height={64}
                      className='h-full w-full object-contain'
                    />
                  </div>

                  <h3 className='mb-1 text-center text-sm font-semibold text-[#0E2E5A] sm:text-base md:mb-2 md:text-lg'>
                    {item.title}
                  </h3>

                  <p className='text-center text-xs text-[#0E2E5A] sm:text-sm md:text-base'>{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mission Section */}
          <section className='mb-10 md:mb-16'>
            <p className='mb-6 text-base md:mb-8 md:text-lg'>
              Our mission is to simplify online shopping by helping you make confident decisions—without spending hours
              researching. Whether you&apos;re looking for a new gadget, fitness gear, pet insurance, or kitchen
              must-haves, we&apos;ve got you covered.
            </p>
          </section>

          {/* How It Works Section */}
          <section className='mb-10 md:mb-16'>
            <h2 className='mb-6 text-2xl font-bold md:mb-8 md:text-3xl'>How It Works</h2>

            <p className='mb-6 text-base md:mb-8 md:text-lg'>
              We combine expert research, AI-powered analysis, and real user reviews to bring you unbiased comparisons
              of top products and services.
            </p>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8'>
              <div className='rounded-lg bg-gray-50 p-4 shadow-sm md:p-6'>
                <h3 className='mb-3 text-lg font-semibold md:mb-4 md:text-xl'>We Research</h3>
                <p className='text-sm md:text-base'>
                  We dig deep—analyzing features, pricing, warranties, and user feedback from across the web.
                </p>
              </div>

              <div className='rounded-lg bg-gray-50 p-4 shadow-sm md:p-6'>
                <h3 className='mb-3 text-lg font-semibold md:mb-4 md:text-xl'>We Compare</h3>
                <p className='text-sm md:text-base'>
                  We organize everything into simple, easy-to-read comparison tables and guides so you can see the best
                  options at a glance.
                </p>
              </div>

              <div className='rounded-lg bg-gray-50 p-4 shadow-sm md:p-6'>
                <h3 className='mb-3 text-lg font-semibold md:mb-4 md:text-xl'>You Decide</h3>
                <p className='text-sm·md:text-base'>
                  No fluff. No hard sells. Just the facts, to help you choose what&apos;s right for you.
                </p>
              </div>
            </div>
          </section>

          {/* Why Trust Us Section */}
          <section className='mb-10 grid items-center gap-8 md:mb-16 md:grid-cols-2'>
            <div className='order-2 md:order-1'>
              <h2 className='mb-4 text-2xl font-bold md:mb-6 md:text-3xl'>Why Trust Us?</h2>
              <p className='text-base md:text-lg'>
                We&apos;re not a retailer. We don&apos;t push any particular brand. We&apos;re an independent team
                focused on helping people shop smarter. We only make money when you click on one of our partner links to
                to buy-a model that keeps access free for everyone and quality high for you.
              </p>
            </div>
            <div className='order-1 md:order-2'>
              <Image
                src='/images/about-img2.png'
                alt='A person thoughtfully comparing products on a laptop'
                width={500}
                height={400}
                className='w-full rounded-lg shadow-lg'
              />
            </div>
          </section>

          {/* Who We Help Section */}
          <section className='mb-10 grid items-center gap-8 md:mb-16 md:grid-cols-2'>
            <div className='order-1'>
              <Image
                src='/images/about-img1.png'
                alt='A group of diverse people happily shopping'
                width={500}
                height={400}
                className='w-full rounded-lg shadow-lg'
              />
            </div>
            <div className='order-2'>
              <h2 className='mb-4 text-2xl font-bold md:mb-6 md:text-3xl'>Who We Help</h2>
              <ul className='space-y-3 text-base md:space-y-4 md:text-lg'>
                <li className='flex items-start'>
                  <span className='mr-2 mt-1'>•</span>
                  <span>Shoppers who want the best value</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 mt-1'>•</span>
                  <span>People tired of scrolling through endless reviews</span>
                </li>
                <li className='flex items-start'>
                  <span className='mr-2 mt-1'>•</span>
                  <span>Anyone looking to save time, money, and frustration</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Our Promise Section */}
          <section className='mb-10 md:mb-16'>
            <h2 className='mb-4 text-2xl font-bold md:mb-6 md:text-3xl'>Our Promise</h2>
            <p className='mb-6 text-base md:mb-8 md:text-lg'>
              We update our guides regularly to reflect real-time availability, trends, and pricing changes. Our goal?
              To be your go-to shopping advisor—transparent, helpful, and always on your side.
            </p>
          </section>

          {/* Contact Section */}
          <section className='rounded-lg bg-gray-50 p-6 text-center shadow-sm md:p-8'>
            <h2 className='mb-4 text-2xl font-bold md:mb-6 md:text-3xl'>Got Questions?</h2>

            <p className='mb-6 text-base md:text-lg'>
              We love feedback. If you spot something outdated or want us to review a product category, drop us a line!
            </p>

            <Link
              href='/contact'
              className='inline-block w-full rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-700 md:w-auto md:px-8'
            >
              Contact Us
            </Link>
          </section>
        </div>
      </ContainerComponent>
    </main>
  )
}

export default AboutModule
