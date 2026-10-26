import { NavBar } from './components/NavBar.jsx'
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home.jsx'
import { About } from './components/About.jsx'
import { Footer } from './components/Footer.jsx'
import { CartPage } from './components/CartPage.jsx'
import { WishlistPage } from './components/WishlistPage.jsx'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
