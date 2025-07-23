import Head from 'next/head'
import Menu from '../components/Menu'
import FadeInSection from '../components/FadeInSection'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState } from 'react'
import { useBasket } from '../components/BasketContext'

const products = [
  { id: 1, name: 'Wooden Rattle', image: '/sample1.svg' },
  { id: 2, name: 'Stacking Rings', image: '/sample2.svg' },
  { id: 3, name: 'Pull-Along Moose', image: '/sample3.svg' },
  { id: 4, name: 'Baby Gym', image: '/sample1.svg' },
  { id: 5, name: 'Teething Ring', image: '/sample2.svg' },
]

export default function Products() {
  const router = useRouter()
  const { addItem } = useBasket()
  const [quantities, setQuantities] = useState({})

  const handleQty = (id, value) =>
    setQuantities(q => ({ ...q, [id]: Math.max(1, value) }))

  const query = router.query.q ? String(router.query.q).toLowerCase() : ''
  const filtered = products.filter(p => p.name.toLowerCase().includes(query))

  return (
    <div>
      <Head>
        <title>Products - Lilla Björn</title>
      </Head>
      <Menu />
      <main>
        <FadeInSection>
          <h1>Products</h1>
          <div className="cards">
            {filtered.map(p => (
              <div key={p.id} className="card">
                <Image src={p.image} alt={p.name} width={150} height={150} />
                <h3>{p.name}</h3>
                <input
                  type="number"
                  min="1"
                  value={quantities[p.id] || 1}
                  onChange={e => handleQty(p.id, parseInt(e.target.value))}
                />
                <button onClick={() => addItem(p, quantities[p.id] || 1)}>
                  Add to basket
                </button>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <p>No products found.</p>}
        </FadeInSection>
      </main>
    </div>
  )
}