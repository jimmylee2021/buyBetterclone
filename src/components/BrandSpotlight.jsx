import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'
import vitaminSerum from '../assets/vitamin.png'
import eyeCream from '../assets/eye.png'

const products = [
  {
    id: 'vitamin-c-serum',
    name: 'La Roche-Posay Vitamin C Serum',
    detail: 'Pure Vitamin C10, 30ml',
    price: 28500,
    image: vitaminSerum,
  },

  {
    id: 'pigmentclar-eyes',
    name: 'La Roche-Posay Pigmentclar Eyes',
    detail: 'Dark Circle Eye Cream, 15ml',
    price: 22000,
    image: eyeCream,
  },
]

export const BrandSpotlight = () => {
  const carouselRef = useRef(null)
  const { addItem } = useCart()
  const { toggleItem, hasItem } = useWishlist()

  const scrollCarousel = (direction) => {
    const carousel = carouselRef.current
    if (!carousel) return

    const card = carousel.querySelector('.brand-product-card')
    if (!card) return

    const gap = Number.parseFloat(getComputedStyle(carousel).columnGap) || 16
    carousel.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: 'smooth',
    })
  }

  return (
    <section className="brand-spotlight" aria-labelledby="brand-spotlight-title">
      <div className="brand-spotlight-content">
        <div className="brand-spotlight-intro">
          <p className="brand-spotlight-eyebrow">Shop the brand of the month</p>
          <h2 id="brand-spotlight-title">La Roche-Posay</h2>
          <p className="brand-spotlight-description">
            Skincare favourites, carefully selected for your everyday routine.
          </p>
          <a className="brand-spotlight-link" href="#brand-products">Shop all</a>
        </div>

        <div className="brand-carousel">
          <button
            className="brand-carousel-arrow brand-carousel-arrow--previous"
            type="button"
            aria-label="Show previous featured products"
            onClick={() => scrollCarousel(-1)}
          >
            <ChevronLeft aria-hidden="true" />
          </button>
          <div className="brand-product-track" id="brand-products" ref={carouselRef}>
            {products.map((product) => (
              <article className="brand-product-card" key={product.id}>
                <div className="brand-product-image">
                  <button
                    className={`brand-product-favorite${hasItem(product.id) ? ' is-saved' : ''}`}
                    type="button"
                    aria-label={`${hasItem(product.id) ? 'Remove' : 'Add'} ${product.name} ${hasItem(product.id) ? 'from' : 'to'} wishlist`}
                    aria-pressed={hasItem(product.id)}
                    onClick={() => toggleItem(product)}
                  >
                    <Heart aria-hidden="true" />
                  </button>
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="brand-product-details">
                  <h3>{product.name}</h3>
                  <p>{product.detail}</p>
                  <p className="brand-product-price">
                    ₦{product.price.toLocaleString('en-NG')}
                  </p>
                  <div className="brand-product-actions">
                    <button
                      type="button"
                      className="brand-add-to-cart"
                      onClick={() => addItem(product)}
                    >
                      Add to Cart
                    </button>
                    <button type="button" className="brand-buy-now">Buy Now</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <button
            className="brand-carousel-arrow brand-carousel-arrow--next"
            type="button"
            aria-label="Show next featured products"
            onClick={() => scrollCarousel(1)}
          >
            <ChevronRight aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
