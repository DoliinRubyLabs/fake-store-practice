'use client'

import { FC, useMemo } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '@heroui/input'

import { ProductButton } from '@/app/(client)/shared/ui/product-button'
import ProductList from '@/app/(client)/widgets/product-list/product-list'
import { Product } from '@/app/(payload)/payload-types'
import { Link } from '@/pkg/libraries/locale'

interface Props {
  products: Product[]
}

const SearchableProducts: FC<Props> = ({ products }) => {
  const { register, watch } = useForm({
    defaultValues: { query: '' },
  })

  const query = watch('query')

  const filteredProducts = useMemo(() => {
    if (!products) return []
    if (!query) return products
    return products.filter((p) => p.fullName.toLowerCase().includes(query.toLowerCase()))
  }, [products, query])

  return (
    <>
      <Input
        {...register('query')}
        placeholder='Search products...'
        className='w-full max-w-[600px] rounded-md border p-2'
      />
      <Link href='/products/favorite'>
        <ProductButton>Check Favorite</ProductButton>
      </Link>
      <ProductList products={filteredProducts} />
    </>
  )
}

export default SearchableProducts
