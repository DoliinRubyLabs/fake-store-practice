import { getPayload } from 'payload'

import config from '@payload-config'

import ProductItem from '@/app/(client)/widgets/product-item/product-item'
import { ListboxWrapper } from '@/app/(client)/widgets/product-list/product-list'

export const dynamicParams = true

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }]
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const payload = await getPayload({ config })

  const product = await payload.findByID({
    collection: 'products',
    id,
  })

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <ListboxWrapper>
        <ProductItem product={product} buttonText='Add to favorite' />
      </ListboxWrapper>
    </div>
  )
}
