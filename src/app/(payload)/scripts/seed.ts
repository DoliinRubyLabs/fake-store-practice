import type { Payload } from 'payload'

export const seed = async (payload: Payload) => {
  console.log('Seeding products...')

  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()

  for (const product of products) {
    // 1. Ensure category exists
    const categoryResult = await payload.find({
      collection: 'categories',
      where: { name: { equals: product.category } },
    })

    let categoryId: string
    if (categoryResult.docs.length === 0) {
      const createdCategory = await payload.create({
        collection: 'categories',
        data: { name: product.category },
      })
      categoryId = createdCategory.id
      console.log(`Created category: ${product.category}`)
    } else {
      categoryId = categoryResult.docs[0].id
    }

    // 2. Create product
    await payload.create({
      collection: 'products',
      data: {
        fullName: product.title,
        shortName: product.title,
        description: product.description,
        estimatedPrice: product.price,
        image: product.image,
        categories: categoryId,
      },
    })

    console.log(`Created product: ${product.title}`)
  }

  console.log('Done seeding')
}
