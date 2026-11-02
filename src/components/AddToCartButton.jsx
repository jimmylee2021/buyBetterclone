import { useEffect, useRef, useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

export const AddToCartButton = ({ product, className = '', showIcon = false }) => {
  const [isAdded, setIsAdded] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const timeoutRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => () => window.clearTimeout(timeoutRef.current), [])

  const handleClick = () => {
    addItem(product)
    setHasInteracted(true)
    setIsAdded(true)
    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = window.setTimeout(() => setIsAdded(false), 1500)
  }

  return (
    <button
      type="button"
      className={`add-to-cart-feedback${hasInteracted ? ' has-feedback' : ''}${isAdded ? ' is-added' : ''}${className ? ` ${className}` : ''}`}
      onClick={handleClick}
    >
      {showIcon && <ShoppingBag aria-hidden="true" />}
      <span
        key={isAdded ? 'added' : 'add'}
        className="add-to-cart-label"
        aria-live="polite"
      >
        {isAdded ? 'Added' : 'Add to Cart'}
      </span>
    </button>
  )
}
