import ky from 'ky'

import ProductItem from '@/app/(client)/widgets/product-item/product-item'
import { ListboxWrapper } from '@/app/(client)/widgets/product-list/product-list'

import { Product } from '../page'

export const dynamicParams = true

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }]
}

const getProduct = async (id: string): Promise<Product> => {
  return ky.get(`https://fakestoreapi.com/products/${id}`, { next: { revalidate: 3600 } }).json()
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = await getProduct(id)

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <ListboxWrapper>
        <ProductItem product={product} buttonText='Add to favorite' />
      </ListboxWrapper>
    </div>
  )
}
