import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CART_STORAGE_KEY = 'buy-better-cart'
const CartContext = createContext(null)

const loadCart = () => {
  try {
    const storedCart = window.localStorage.getItem(CART_STORAGE_KEY)
    if (!storedCart) return []

    const parsedCart = JSON.parse(storedCart)
    if (!Array.isArray(parsedCart)) {
      throw new Error('Saved cart data must be an array.')
    }

    return parsedCart.filter((item) =>
      item
      && (typeof item.id === 'string' || typeof item.id === 'number')
      && typeof item.name === 'string'
      && typeof item.price === 'number'
      && typeof item.image === 'string'
      && Number.isInteger(item.quantity)
      && item.quantity > 0
    )
  } catch (error) {
    console.error('Unable to load the saved cart.', error)
    return []
  }
}

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(loadCart)

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items))
    } catch (error) {
      console.error('Unable to save the cart.', error)
    }
  }, [items])

  const addItem = (product) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)
      if (existingItem) {
        return currentItems.map((item) => (
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ))
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (productId, quantity) => {
    setItems((currentItems) => currentItems
      .map((item) => (item.id === productId ? { ...item, quantity } : item))
      .filter((item) => item.quantity > 0))
  }

  const removeItem = (productId) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

  const value = useMemo(() => ({
    items,
    addItem,
    updateQuantity,
    removeItem,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    subtotal: items.reduce((total, item) => total + item.price * item.quantity, 0),
  }), [items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const cart = useContext(CartContext)
  if (!cart) {
    throw new Error('useCart must be used within a CartProvider.')
  }
  return cart
}
