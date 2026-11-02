import { useLayoutEffect } from 'react'
import { NavBar } from './components/NavBar.jsx'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Home } from './components/Home.jsx'
import { About } from './components/About.jsx'
import { Footer } from './components/Footer.jsx'
import { CartPage } from './components/CartPage.jsx'
import { WishlistPage } from './components/WishlistPage.jsx'
import { ProductsPage } from './components/ProductsPage.jsx'
import { ProductDetailsPage } from './components/ProductDetailsPage.jsx'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
