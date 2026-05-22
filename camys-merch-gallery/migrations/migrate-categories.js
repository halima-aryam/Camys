import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2023-01-01' })

async function run() {
  console.log('Fetching products to migrate...')
  const query = '*[_type == "product" && category in ["apparel", "bags", "posters"]] { _id, title, category }'
  const products = await client.fetch(query)

  if (products.length === 0) {
    console.log('No products with legacy categories found.')
    return
  }

  console.log(`Found ${products.length} products to migrate.`)

  let tx = client.transaction()
  let updatedCount = 0

  for (const product of products) {
    let newCategory = 'outerwear'
    if (product.title.toLowerCase().includes('bracelet')) {
      newCategory = 'jewellery'
    }

    console.log(`Mapping "${product.title}" (${product._id}) from "${product.category}" to "${newCategory}"`)
    tx = tx.patch(product._id, { set: { category: newCategory } })
    updatedCount++
  }

  console.log(`Committing transaction for ${updatedCount} patches...`)
  const result = await tx.commit()
  console.log('Migration completed successfully!')
}

run().catch(err => {
  console.error('Migration failed:', err)
  process.exit(1)
})
