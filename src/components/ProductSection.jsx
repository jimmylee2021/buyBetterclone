
import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { Heart } from "lucide-react";
import { useWishlist } from "../context/WishlistContext.jsx";
import vitamin from '../assets/vitamin.png'
import eye from '../assets/eye.png'
import sheglam from '../assets/sheglam.png'

const tabs = ["Trending", "New Arrival", "On Sale"];

const products = [
  {
    id: 1,
    name: "Sheglam Makeup Bag",
    price: 35000,
    category: "Trending",
    image: sheglam,
  },
  {
    id: 2,
    name: "Everyday Bag",
    price: 28000,
    category: "Trending",
    image: eye,
  },
  {
    id: 3,
    name: "Everyday Bag",
    price: 28000,
    category: "Trending",
    image: eye,
  },
  {
    id: 4,
    name: "Premium Watch",
    price: 45000,
    category: "Trending",
    image: vitamin,
  },
  {
    id: 5,
    name: "Premium Watch",
    price: 45000,
    category: "New Arrival",
    image: vitamin,
  },
  {
    id: 6,
    name: "Premium Watch",
    price: 45000,
    category: "On Sale",
    image: vitamin,
  },
  {
    id: 7,
    name: "Premium Watch",
    price: 45000,
    category: "New Arrival",
    image: vitamin,
  },
  {
    id: 8,
    name: "Premium Watch",
    price: 45000,
    category: "On Sale",
    image: vitamin,
  },
  {
    id: 9,
    name: "Premium Watch",
    price: 45000,
    category: "New Arrival",
    image: vitamin,
  },
];

export const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("Trending");
  const { addItem } = useCart();
  const { toggleItem, hasItem } = useWishlist();

  const filteredProducts = products.filter(
    (product) => product.category === activeTab
  );

  return (
    <section className="product-section">
      <div className="product-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-card-image-wrap">
              <img src={product.image} alt={product.name} />
              <button
                type="button"
                className={`product-wishlist-button${hasItem(product.id) ? " is-saved" : ""}`}
                aria-label={`${hasItem(product.id) ? "Remove" : "Add"} ${product.name} ${hasItem(product.id) ? "from" : "to"} wishlist`}
                aria-pressed={hasItem(product.id)}
                onClick={() => toggleItem(product)}
              >
                <Heart aria-hidden="true" />
              </button>
            </div>

            <h3>{product.name}</h3>

            <p>
              ₦{product.price.toLocaleString("en-NG")}
            </p>
           <div className="product-card-buttons">
            <button className="product-card-btn" onClick={() => addItem(product)}>Add to Cart</button>
            <button className="product-card-btn buy-now">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
