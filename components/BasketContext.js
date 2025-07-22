import { createContext, useContext, useState } from 'react'

const BasketContext = createContext({ items: [], addItem: () => {}, removeItem: () => {} })

export function BasketProvider({ children }) {
  const [items, setItems] = useState([])
  const addItem = item => setItems(prev => [...prev, item])
  const removeItem = id => setItems(prev => prev.filter(p => p.id !== id))
  return (
    <BasketContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </BasketContext.Provider>
  )
}

export const useBasket = () => useContext(BasketContext)

export default BasketContext
