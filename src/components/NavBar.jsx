import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Heart, Menu, ShoppingBag, UserRound, X } from 'lucide-react'
import { useCart } from '../context/CartContext.jsx'
import { useWishlist } from '../context/WishlistContext.jsx'

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { itemCount } = useCart()
  const { items: wishlistItems } = useWishlist()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="header-content">
        <nav className={`nav-bar${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
          <div className="nav-links" id="primary-navigation">
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/about" onClick={closeMenu}>About</NavLink>
            <NavLink to="/products" onClick={closeMenu}>Products</NavLink>
          </div>
        </nav>
        <div className="logo">BuyBetter</div>
        <div className="other-links">
          <NavLink to="/cart" className="cart-link" aria-label={`Shopping bag, ${itemCount} items`}>
            <ShoppingBag aria-hidden="true" />
            {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
          </NavLink>
          <NavLink
            to="/wishlist"
            className="wishlist-link"
            aria-label={`Wishlist, ${wishlistItems.length} saved items`}
          >
            <Heart aria-hidden="true" />
            {wishlistItems.length > 0 && <span className="wishlist-count">{wishlistItems.length}</span>}
          </NavLink>
          <NavLink to="/cart" aria-label="Account"><UserRound aria-hidden="true" /></NavLink>
        </div>
      </div>
    </header>
  )
}