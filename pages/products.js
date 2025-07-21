import Head from 'next/head'
import Menu from '../components/Menu'
import { useRouter } from 'next/router'

const products = [
  { id: 1, name: 'Wooden Rattle' },
  { id: 2, name: 'Stacking Rings' },
  { id: 3, name: 'Pull-Along Moose' },
  { id: 4, name: 'Baby Gym' },
  { id: 5, name: 'Teething Ring' }
]

export default function Products() {
  const router = useRouter()
  const query = router.query.q ? String(router.query.q).toLowerCase() : ''
  const filtered = products.filter(p => p.name.toLowerCase().includes(query))

  return (
    <div>
      <Head>
        <title>Products - Lilla Björn</title>
      </Head>
      <Menu />
      <main>
        <h1>Products</h1>
        <ul>
          {filtered.map(p => (
            <li key={p.id}>{p.name}</li>
          ))}
        </ul>
        {filtered.length === 0 && <p>No products found.</p>}
      </main>
    </div>
  )
}
