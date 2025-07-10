'use client'

import { Fragment, useEffect, useRef, useState } from 'react'

import { Divider } from '@heroui/divider'

import { IProduct } from '@/app/(client)/entities/models'
import { mockProducts } from '@/app/(client)/features/block/comparisons-table/constants'
import { ProductCompareTopSectionComponent } from '@/app/(client)/features/block/comparisons-table/elements/comparisons-table-b/elements/product-compare-top-section'

import { TableScrollButtonComponent } from './elements/table-scroll-button'

const CARD_WIDTH = 200
const SCROLL_SHIFT = 80

// component
const ComparisonsTableBComponent = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [maxLabelWidth, setMaxLabelWidth] = useState<number>(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateWidth = () => {
      if (scrollRef.current) {
        setMaxLabelWidth(scrollRef.current.offsetWidth)
      }
    }

    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const totalShift = CARD_WIDTH + SCROLL_SHIFT

      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -totalShift : totalShift,
        behavior: 'smooth',
      })
    }
  }

  // return
  return (
    <section className='relative w-full'>
      <h2 className='text-2xl font-bold'>Compare Features</h2>

      <Divider className='mx-auto mb-5 mt-4 max-w-[95%]' />

      <div ref={scrollRef} className='relative h-full w-full border-b border-default-300'>
        <div className='pointer-events-none absolute -left-7 -right-8 top-28 z-30 hidden justify-between px-2 sm:flex'>
          <TableScrollButtonComponent onClick={() => handleScroll('left')} />

          <TableScrollButtonComponent onClick={() => handleScroll('right')} isRight />
        </div>

        <div ref={scrollContainerRef} className='relative w-full overflow-x-auto scroll-smooth'>
          <table className='relative border-collapse'>
            <thead>
              <tr>
                {mockProducts?.map((product: IProduct, index) => (
                  <th
                    key={`${product.id}-${index}`}
                    className={`min-w-[${CARD_WIDTH}px] max-w-[${CARD_WIDTH}px] align-top`}
                  >
                    <ProductCompareTopSectionComponent product={product} />
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className='relative'>
              {mockProducts[0].details?.map((item, index) => (
                <Fragment key={`${item.title}-${index}`}>
                  <tr>
                    <td
                      colSpan={mockProducts.length}
                      className='border-y border-default-300 bg-default-50 p-1 text-center font-semibold'
                    >
                      <div
                        className='sticky left-0 z-10 truncate bg-default-50 text-xs sm:text-sm'
                        style={{ maxWidth: maxLabelWidth }}
                      >
                        {item.title}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    {mockProducts.map((product: IProduct, index) => (
                      <td
                        key={`${product.id}-${index}`}
                        className='border-x border-default-300 p-1 text-center text-xs sm:text-sm'
                      >
                        {product.details?.map(
                          (detail) =>
                            detail.title === item.title &&
                            detail.rows.map((row, index) => <p key={`${detail.title}-${index}`}>{row.label}</p>),
                        ) ?? '-'}
                      </td>
                    ))}
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default ComparisonsTableBComponent
