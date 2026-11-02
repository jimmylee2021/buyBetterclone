import { Link, useParams } from 'react-router-dom'
import { Heart } from 'lucide-react'
import { products } from '../data/products.js'
import { useWishlist } from '../context/WishlistContext.jsx'
import { AddToCartButton } from './AddToCartButton.jsx'

const formatPrice = (price) => `₦${price.toLocaleString('en-NG')}`

export const ProductDetailsPage = () => {
  const { productId } = useParams()
  const product = products.find((item) => String(item.id) === productId)
  const { toggleItem, hasItem } = useWishlist()

  if (!product) {
    return (
      <main className="product-details-page">
        <div className="product-details-content product-not-found">
          <h1>Product not found</h1>
          <p>We couldn’t find that product. Browse the catalog to discover what’s available.</p>
          <Link className="product-details-back" to="/products">Browse all products</Link>
        </div>
      </main>
    )
  }

  const isSaved = hasItem(product.id)

  return (
    <main className="product-details-page">
      <div className="product-details-content">
        <Link className="product-details-back" to="/products">← Back to all products</Link>
        <article className="product-details">
          <div className="product-details-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details-info">
            <p className="product-details-category">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="product-details-price">{formatPrice(product.price)}</p>
            <div className="product-details-description">
              <h2>Product details</h2>
              <p>
                {product.name} is part of our {product.category.toLowerCase()} collection.
                Add it to your cart to continue shopping with BuyBetter.
              </p>
            </div>
            <div className="product-details-actions">
              <AddToCartButton product={product} showIcon />
              <button
                type="button"
                className={`product-details-wishlist${isSaved ? ' is-saved' : ''}`}
                aria-pressed={isSaved}
                onClick={() => toggleItem(product)}
              >
                <Heart aria-hidden="true" />
                {isSaved ? 'Saved to Wishlist' : 'Add to Wishlist'}
              </button>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
