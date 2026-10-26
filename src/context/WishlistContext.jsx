import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const WISHLIST_STORAGE_KEY = 'buy-better-wishlist'
const WishlistContext = createContext(null)

const loadWishlist = () => {
  try {
    const storedWishlist = window.localStorage.getItem(WISHLIST_STORAGE_KEY)
    if (!storedWishlist) return []

    const parsedWishlist = JSON.parse(storedWishlist)
    if (!Array.isArray(parsedWishlist)) {
      throw new Error('Saved wishlist data must be an array.')
    }

    return parsedWishlist.filter((product) =>
      product
      && (typeof product.id === 'string' || typeof product.id === 'number')
      && typeof product.name === 'string'
      && typeof product.price === 'number'
      && typeof product.image === 'string'
    )
  } catch (error) {
    console.error('Unable to load the saved wishlist.', error)
    return []
  }
}

export const WishlistProvider = ({ children }) => {
  const [items, setItems] = useState(loadWishlist)

  useEffect(() => {
    try {
      window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items))
    } catch (error) {
      console.error('Unable to save the wishlist.', error)
    }
  }, [items])

  const addItem = (product) => {
    setItems((currentItems) => (
      currentItems.some((item) => item.id === product.id)
        ? currentItems
        : [...currentItems, product]
    ))
  }

  const removeItem = (productId) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId))
  }

  const toggleItem = (product) => {
    setItems((currentItems) => (
      currentItems.some((item) => item.id === product.id)
        ? currentItems.filter((item) => item.id !== product.id)
        : [...currentItems, product]
    ))
  }

  const value = useMemo(() => ({
    items,
    addItem,
    removeItem,
    toggleItem,
    hasItem: (productId) => items.some((item) => item.id === productId),
  }), [items])

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>
}

export const useWishlist = () => {
  const wishlist = useContext(WishlistContext)
  if (!wishlist) {
    throw new Error('useWishlist must be used within a WishlistProvider.')
  }
  return wishlist
}
