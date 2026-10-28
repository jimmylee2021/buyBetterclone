import { ProductCard } from './ProductCard.jsx'
import { products } from '../data/products.js'

export const ProductsPage = () => (
  <main className="products-page">
    <div className="products-content">
      <h1>All Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </main>
)
