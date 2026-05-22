import { getCliClient } from 'sanity/cli'

const client = getCliClient({ apiVersion: '2023-01-01' })

async function run() {
  const count = await client.fetch('count(*[_type == "product"])')
  console.log('Total products count:', count)
}

run().catch(err => {
  console.error(err)
  process.exit(1)
})
