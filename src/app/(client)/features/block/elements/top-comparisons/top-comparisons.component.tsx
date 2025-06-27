import Image from 'next/image'
import { type FC, useState } from 'react'

import { Button } from '@heroui/button'
import { Divider } from '@heroui/divider'

// interface
interface IProps {}

// mock data
const comparisons = [
  {
    image: '/mock/tablet.jpg',
    title: 'Best tablets',
    desc: 'Tablets are becoming increasingly popular, offering users a convenient and portable way to enjoy the latest technology. If youre considering buying a tablet, reading comprehensive reviews is the best way to make the right decision. Here, you can find out all the key features of..',
    link: '#',
    featured: true,
  },
  {
    image: '/mock/monitor.jpg',
    title: 'Best gaming monitors',
    desc: 'Are you looking for the perfect monitor for your gaming setup? With so many options available, ...',
    link: '#',
  },
  {
    image: '/mock/air.jpg',
    title: 'Best air purifiers',
    desc: 'Air purifiers are one of the most popular home appliances and come in a variety of shapes,...',
    link: '#',
  },
  {
    image: '/mock/baby.jpg',
    title: 'Best baby monitors',
    desc: 'A baby monitor is a great way to keep an eye on your little one while they sleep. But with so man...',
    link: '#',
  },
  {
    image: '/mock/vacuum.jpg',
    title: 'Best cordless vacuums',
    desc: 'Cordless vacuums are an increasingly popular choice for homeowners due to their convenienc...',
    link: '#',
  },
  {
    image: '/mock/air.jpg',
    title: 'Best air purifiers',
    desc: 'Air purifiers are one of the most popular home appliances and come in a variety of shapes,...',
    link: '#',
  },
  {
    image: '/mock/baby.jpg',
    title: 'Best baby monitors',
    desc: 'A baby monitor is a great way to keep an eye on your little one while they sleep. But with so man...',
    link: '#',
  },
  {
    image: '/mock/vacuum.jpg',
    title: 'Best cordless vacuums',
    desc: 'Cordless vacuums are an increasingly popular choice for homeowners due to their convenienc...',
    link: '#',
  },
]

// component
const TopComparisonsComponent: FC<Readonly<IProps>> = () => {
  const [expandAllCards, setExpandAllCards] = useState(false)

  // return
  return (
    <section className='rounded-lg bg-primary-50/50 px-6 py-10 md:p-8'>
      <h2 className='mb-1 flex items-center gap-2 text-3xl font-bold text-primary-900 md:text-4xl'>
        Popular comparisons
      </h2>

      <p className='xl:text-xl mb-6 text-default-500 sm:text-xl md:text-lg'>
        Explore our popular comparisons across various categories
      </p>

      <div className='mb-6 flex flex-col gap-6 md:flex-row'>
        <div className='h-[180px] w-full flex-shrink-0 overflow-hidden rounded-xl bg-default-100 md:w-[320px]'>
          <Image
            src={'/images/og-image.png'}
            alt={comparisons[0].title}
            width={320}
            height={180}
            className='h-full w-full object-cover'
          />
        </div>

        <div className='flex flex-1 flex-col justify-center'>
          <h3 className='mb-2 text-2xl font-bold text-primary-900'>{comparisons[0].title}</h3>

          <p className='mb-2 text-base text-default-700 md:text-lg'>
            {comparisons[0].desc}
            <a href={comparisons[0].link} className='ml-1 text-primary-600 underline'>
              Read more
            </a>
          </p>
        </div>
      </div>

      <Divider className='my-4' />

      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {comparisons.slice(0, 4).map((item) => (
          <div key={item.title} className='flex items-start gap-4'>
            <div className='h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-default-100'>
              <Image
                src={'/images/og-image.png'}
                alt={item.title}
                width={80}
                height={80}
                className='h-full w-full object-cover'
              />
            </div>

            <div className='flex-1'>
              <h4 className='mb-1 text-lg font-bold text-primary-900'>{item.title}</h4>

              <p className='mb-1 text-base text-default-700'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='mt-8 flex justify-center'>
        <Button
          variant='bordered'
          color='primary'
          onPress={() => setExpandAllCards((prev) => !prev)}
          className='rounded-lg'
        >
          {expandAllCards ? 'Show less' : 'Show more'}
        </Button>
      </div>
    </section>
  )
}

export default TopComparisonsComponent
