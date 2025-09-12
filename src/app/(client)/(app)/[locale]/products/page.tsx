'use client'

import ky from 'ky'
import React, { FC, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@heroui/input'
import { useQuery } from '@tanstack/react-query'

import { ProductButton } from '@/app/(client)/shared/ui/product-button'
import ProductList from '@/app/(client)/widgets/product-list/product-list'
import { Link } from '@/pkg/libraries/locale'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

const ProductsPage: FC = () => {
  const getProducts = (): Promise<Product[]> =>
    ky.get('https://fakestoreapi.com/products', { next: { revalidate: 60 } }).json()

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  const { register, watch } = useForm({
    defaultValues: { query: '' },
  })

  const query = watch('query')
  const filteredProducts = useMemo(() => {
    if (!products) return []
    if (!query) return products
    return products.filter((productItem) => productItem.title.toLowerCase().includes(query.toLowerCase()))
  }, [products, query])

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <Input
        {...register('query')}
        placeholder='Search products...'
        className='w-full max-w-[600px] rounded-md border p-2'
      />
      <Link href={'/products/favorite'}>
        <ProductButton>Check Favorite</ProductButton>
      </Link>
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default ProductsPage
