import React, { FC, PropsWithChildren } from 'react'

import { Listbox, ListboxItem } from '@heroui/listbox'

import { Product } from '@/app/(payload)/payload-types'
import { Link } from '@/pkg/libraries/locale'

import ProductItem from '../product-item/product-item'

export const ListboxWrapper: FC<PropsWithChildren> = ({ children }) => (
  <div className='border-small rounded-small border-default-200 dark:border-default-100 mt-10 w-full max-w-[600px] px-1 py-2'>
    {children}
  </div>
)

interface ProductListProps {
  products?: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <ListboxWrapper>
      <Listbox>
        {products?.map((productItem: Product) => (
          <ListboxItem
            key={productItem.id}
            className='border-small rounded-small border-default-200 dark:border-default-100 mt-10'
          >
            <Link href={`/products/${productItem.id}`}>
              <ProductItem product={productItem} buttonText='See details'></ProductItem>
            </Link>
          </ListboxItem>
        )) ?? null}
      </Listbox>
    </ListboxWrapper>
  )
}
