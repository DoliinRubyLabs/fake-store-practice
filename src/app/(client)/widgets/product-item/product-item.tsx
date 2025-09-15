'use client'

import Image from 'next/image'

import { Product } from '@/app/(payload)/payload-types'

import { useGlobalStore } from '../../shared/store'
import { ProductButton } from '../../shared/ui/product-button'

export default function ProductItem({ product, buttonText }: { product: Product; buttonText: string }) {
  const { addFavorite } = useGlobalStore()
  const handlePress = (product: Product) => addFavorite(product)

  if (!product) return <p>Loading...</p>

  return (
    <div>
      <h1 className='text-2xl font-semibold'>{product.fullName}</h1>
      <p className='text-gray-600'>{product.description}</p>
      <p className='mt-2 font-bold'>${product.estimatedPrice}</p>
      <div className='flex flex-col items-center justify-between'>
        <Image
          src={product.image ?? '/placeholder.png'}
          alt={product.fullName}
          className='mt-4 w-48'
          width={400}
          height={400}
        />
        <ProductButton onPress={() => handlePress(product)}>{buttonText}</ProductButton>
      </div>
    </div>
  )
}
