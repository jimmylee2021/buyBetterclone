import { Heart } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

export const ProductCard = ({ product }) => {
  const { addItem } = useCart()
  const { toggleItem, hasItem } = useWishlist()
  const isSaved = hasItem(product.id)

  return (
    <article className="product-card">
      <div className="product-card-image-wrap">
        <img src={product.image} alt={product.name} />
        <button
          type="button"
          className={`product-wishlist-button${isSaved ? ' is-saved' : ''}`}
          aria-label={`${isSaved ? 'Remove' : 'Add'} ${product.name} ${isSaved ? 'from' : 'to'} wishlist`}
          aria-pressed={isSaved}
          onClick={() => toggleItem(product)}
        >
          <Heart aria-hidden="true" />
        </button>
      </div>

      <h3>{product.name}</h3>
      <p>₦{product.price.toLocaleString('en-NG')}</p>
      <div className="product-card-buttons">
        <button className="product-card-btn" onClick={() => addItem(product)}>Add to Cart</button>
        <button className="product-card-btn buy-now">Buy Now</button>
      </div>
    </article>
  )
}
