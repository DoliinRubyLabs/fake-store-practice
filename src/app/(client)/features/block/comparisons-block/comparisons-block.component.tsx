'use client'

import { Lightbulb } from 'lucide-react'
import { type FC, Fragment } from 'react'

import { Button } from '@heroui/button'
import { useDisclosure } from '@heroui/react'
import { Skeleton } from '@heroui/skeleton'

import { IProductsBlock } from '@/app/(client)/entities/models'
import { MidSectionComponent } from '@/app/(client)/shared/ui/mid-section'
import { Link } from '@/pkg/libraries/locale'

import { ProductCardComponent } from './elements/product-card'
import { RankInfoModalComponent } from './elements/rank-info-modal'

// interface
interface IProps {
  data?: IProductsBlock
  isLoading?: boolean
}

// component
const ComparisonsBlockComponent: FC<Readonly<IProps>> = (props) => {
  const { data, isLoading = false } = props

  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  // return
  return (
    <>
      <Skeleton isLoaded={!isLoading} as='section' id={data?.id}>
        <ul className='mb-6 grid gap-6'>
          {data?.products?.docs?.map((product, i) => (
            <Fragment key={`${product.id}-${i}`}>
              <ProductCardComponent
                order={i + 1}
                reverseOrder={data?.products?.docs?.length ? data?.products?.docs?.length - i : undefined}
                product={product}
              />

              {i === 0 && (
                <MidSectionComponent>
                  <Button
                    onPress={onOpen}
                    variant='light'
                    disableAnimation
                    disableRipple
                    color='primary'
                    size='lg'
                    className='gap-2 font-medium text-primary-600 underline data-[hover=true]:bg-transparent'
                    startContent={<Lightbulb size={20} />}
                  >
                    How do we rank?
                  </Button>
                </MidSectionComponent>
              )}
            </Fragment>
          ))}
        </ul>

        <MidSectionComponent>
          <Lightbulb size={16} />

          <span>Discover top deals and categories on Amazon</span>

          <Link href='/' className='ml-1 text-sm text-primary-600 underline'>
            Check Deals
          </Link>
        </MidSectionComponent>
      </Skeleton>

      <RankInfoModalComponent isOpen={isOpen} title='Rank Info' onOpenChange={onOpenChange} />
    </>
  )
}

export default ComparisonsBlockComponent
