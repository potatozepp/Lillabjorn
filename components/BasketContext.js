import { createContext, useContext, useState } from 'react'

const BasketContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
})

export function BasketProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (item, quantity = 1) =>
    setItems(prev => {
      const existing = prev.find(p => p.id === item.id)
      if (existing) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + quantity } : p
        )
      }
      return [...prev, { ...item, quantity }]
    })

  const incrementItem = id =>
    setItems(prev =>
      prev.map(p => (p.id === id ? { ...p, quantity: p.quantity + 1 } : p))
    )

  const decrementItem = id =>
    setItems(prev =>
      prev
        .map(p =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter(p => p.quantity > 0)
    )

  const removeItem = id => setItems(prev => prev.filter(p => p.id !== id))

  return (
    <BasketContext.Provider
      value={{ items, addItem, removeItem, incrementItem, decrementItem }}
    >
      {children}
    </BasketContext.Provider>
  )
}

export const useBasket = () => useContext(BasketContext)

export default BasketContext