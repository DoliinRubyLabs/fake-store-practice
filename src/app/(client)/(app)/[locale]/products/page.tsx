import { getPayload } from 'payload'

import config from '@payload-config'

import SearchableProducts from '@/app/(client)/widgets/product-search/product-search'

export default async function ProductsPage() {
  const payload = await getPayload({ config })

  const { docs: products } = await payload.find({
    collection: 'products',
    limit: 20,
  })

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <SearchableProducts products={products} />
    </div>
  )
}
