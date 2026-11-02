import { useState } from 'react'
import { ProductCard } from './ProductCard.jsx'
import { products } from '../data/products.js'

const formatPrice = (price) => `₦${price.toLocaleString('en-NG')}`
const maximumProductPrice = Math.max(...products.map((product) => product.price))
const categories = [...new Set(products.map((product) => product.category))]

export const ProductsPage = () => {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')
  const [maxPrice, setMaxPrice] = useState(maximumProductPrice)
  const [sortOrder, setSortOrder] = useState('featured')

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(search.trim().toLowerCase()))
    .filter((product) => !category || product.category === category)
    .filter((product) => product.price <= maxPrice)
    .sort((first, second) => {
      if (sortOrder === 'price-low') return first.price - second.price
      if (sortOrder === 'price-high') return second.price - first.price
      if (sortOrder === 'name') return first.name.localeCompare(second.name)
      return 0
    })

  const clearFilters = () => {
    setSearch('')
    setCategory('')
    setMaxPrice(maximumProductPrice)
    setSortOrder('featured')
  }

  return (
    <main className="products-page">
      <div className="products-content">
        <h1>All Products</h1>
        <section className="product-filters" aria-label="Filter products">
          <div className="product-filter-field product-search-field">
            <label htmlFor="product-search">Search products</label>
            <input
              id="product-search"
              type="search"
              placeholder="Search by product name"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <div className="product-filter-field">
            <label htmlFor="product-category">Category</label>
            <select
              id="product-category"
              value={category}
              onChange={(event) => setCategory(event.target.value)}
            >
              <option value="">All categories</option>
              {categories.map((productCategory) => (
                <option key={productCategory} value={productCategory}>
                  {productCategory}
                </option>
              ))}
            </select>
          </div>
          <div className="product-filter-field product-price-filter">
            <label htmlFor="product-price">
              Max price: <strong>{formatPrice(maxPrice)}</strong>
            </label>
            <input
              id="product-price"
              type="range"
              min="0"
              max={maximumProductPrice}
              step="1000"
              value={maxPrice}
              onChange={(event) => setMaxPrice(Number(event.target.value))}
            />
          </div>
          <div className="product-filter-field">
            <label htmlFor="product-sort">Sort by</label>
            <select
              id="product-sort"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to high</option>
              <option value="price-high">Price: High to low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>
          <button type="button" className="product-filter-reset" onClick={clearFilters}>
            Clear filters
          </button>
        </section>
        <p className="product-results-count" aria-live="polite">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
        </p>
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="product-no-results">
            <h2>No products found</h2>
            <p>Try changing your search or filters to see more products.</p>
            <button type="button" className="product-filter-reset" onClick={clearFilters}>
              Clear filters
            </button>
          </div>
        )}
      </div>
    </main>
  )
}
