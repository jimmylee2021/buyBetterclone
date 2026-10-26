import { Link } from 'react-router-dom'
import { Heart, ShoppingBag, X } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

const formatPrice = (price) => `₦${price.toLocaleString('en-NG')}`

export const WishlistPage = () => {
  const { items, removeItem } = useWishlist()
  const { addItem } = useCart()

  return (
    <main className="wishlist-page">
      <div className="wishlist-content">
        <div className="wishlist-heading">
          <Heart aria-hidden="true" />
          <h1>Your Wishlist</h1>
        </div>
        {items.length === 0 ? (
          <div className="wishlist-empty">
            <p>You haven’t saved any products yet.</p>
            <Link to="/">Explore products</Link>
          </div>
        ) : (
          <div className="wishlist-grid">
            {items.map((product) => (
              <article className="wishlist-card" key={product.id}>
                <div className="wishlist-card-image">
                  <img src={product.image} alt={product.name} />
                  <button
                    type="button"
                    className="wishlist-remove"
                    aria-label={`Remove ${product.name} from wishlist`}
                    onClick={() => removeItem(product.id)}
                  >
                    <X aria-hidden="true" />
                  </button>
                </div>
                <div className="wishlist-card-info">
                  <h2>{product.name}</h2>
                  {product.detail && <p>{product.detail}</p>}
                  <strong>{formatPrice(product.price)}</strong>
                  <button
                    type="button"
                    className="wishlist-add-cart"
                    onClick={() => addItem(product)}
                  >
                    <ShoppingBag aria-hidden="true" />
                    Add to Cart
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
