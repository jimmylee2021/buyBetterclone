import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useWishlist } from '../context/WishlistContext.jsx'
import { AddToCartButton } from './AddToCartButton.jsx'

export const ProductCard = ({ product }) => {
  const { toggleItem, hasItem } = useWishlist()
  const isSaved = hasItem(product.id)
  const detailsPath = `/products/${product.id}`

  return (
    <article className="product-card">
      <div className="product-card-image-wrap">
        <Link to={detailsPath} aria-label={`View details for ${product.name}`}>
          <img src={product.image} alt={product.name} />
        </Link>
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

      <h3><Link to={detailsPath}>{product.name}</Link></h3>
      <p>₦{product.price.toLocaleString('en-NG')}</p>
      <div className="product-card-buttons">
        <AddToCartButton product={product} className="product-card-btn" />
        <Link className="product-card-btn buy-now" to={detailsPath}>View Details</Link>
      </div>
    </article>
  )
}
