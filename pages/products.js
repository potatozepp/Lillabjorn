import Head from 'next/head'
import Menu from '../components/Menu'
import FadeInSection from '../components/FadeInSection'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useBasket } from '../components/BasketContext'
import { FaCheckCircle } from 'react-icons/fa'

const products = [
  { id: 1, name: 'Wooden Rattle', image: '/rattle.png' },
  { id: 2, name: 'Stacking Rings', image: '/rings.png' },
  { id: 3, name: 'Pull-Along Moose', image: '/moose.png' },
  { id: 4, name: 'Baby Gym', image: '/gym.png' },
  { id: 5, name: 'Teething Ring', image: '/teething.png' },
]

export default function Products() {
  const router = useRouter()
  const { addItem } = useBasket()
  const [quantities, setQuantities] = useState({})
  const [showCheck, setShowCheck] = useState(false)

  const handleQty = (id, value) =>
    setQuantities(q => ({ ...q, [id]: Math.max(1, value) }))

  const handleAdd = (product, quantity) => {
    addItem(product, quantity)
    setShowCheck(true)
    setTimeout(() => setShowCheck(false), 800)
  }

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
                <form onSubmit={e => e.preventDefault()}>
                  <input
                    type="number"
                    min="1"
                    value={quantities[p.id] || 1}
                    onChange={e => handleQty(p.id, parseInt(e.target.value))}
                  />
                  <button onClick={() => handleAdd(p, quantities[p.id] || 1)}>
                    Add to basket
                  </button>
                </form>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <p>No products found.</p>}
        </FadeInSection>

        {/* ✅ Done animation */}
        <div className={`added-checkmark ${showCheck ? 'show' : ''}`}>
          <FaCheckCircle />
        </div>
      </main>
    </div>
  )
}
