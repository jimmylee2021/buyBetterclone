
import { useState } from "react";
import { ProductCard } from "./ProductCard.jsx";
import { products } from "../data/products.js";

const tabs = ["Trending", "New Arrival", "On Sale"];

export const ProductSection = () => {
  const [activeTab, setActiveTab] = useState("Trending");

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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
