'use client'

import React, { FC } from 'react'

import { useGlobalStore } from '@/app/(client)/shared/store'
import ProductList from '@/app/(client)/widgets/product-list/product-list'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

const ProductsPage: FC = () => {
  const { favoriteProducts } = useGlobalStore()
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <ProductList products={favoriteProducts} />
    </div>
  )
}

export default ProductsPage
