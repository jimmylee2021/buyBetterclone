import { Link } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'

const formatPrice = (price) => `₦${price.toLocaleString('en-NG')}`

export const CartPage = () => {
  const { items, subtotal, updateQuantity, removeItem } = useCart()

  return (
    <main className="cart-page">
      <div className="cart-content">
        <h1>Your Cart</h1>
        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is currently empty.</p>
            <Link to="/">Continue shopping</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <p>{formatPrice(item.price)}</p>
                    <div className="cart-item-controls">
                      <span className="cart-quantity-label">Quantity</span>
                      <div
                        className="cart-quantity-stepper"
                        role="group"
                        aria-label={`Quantity: ${item.quantity}`}
                      >
                        <button
                          className="cart-quantity-button"
                          type="button"
                          aria-label={`Decrease quantity of ${item.name}`}
                          disabled={item.quantity <= 1}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus aria-hidden="true" />
                        </button>
                        <span className="cart-quantity-value" aria-live="polite">
                          {item.quantity}
                        </span>
                        <button
                          className="cart-quantity-button"
                          type="button"
                          aria-label={`Increase quantity of ${item.name}`}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus aria-hidden="true" />
                        </button>
                      </div>
                      <button type="button" onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="cart-item-total">{formatPrice(item.price * item.quantity)}</p>
                </article>
              ))}
            </div>
            <aside className="cart-summary">
              <h2>Order summary</h2>
              <div>
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p>Shipping and taxes are calculated at checkout.</p>
              <button type="button" disabled>Checkout coming soon</button>
            </aside>
          </div>
        )}
      </div>
    </main>
  )
}
