import { Container } from "@mui/material";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { motion, AnimatePresence } from "framer-motion";

import { CartContext } from "../client/CartContext";
import { AuthContext } from "../auth/AuthContext";
import itemsData from "../data/itemsData";
import "../styles/Items.scss";

const CATEGORIES = ["All", "Cable", "Earthing", "Duct", "Signal", "Power", "Accessories"];

function Items() {
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [quantities, setQuantities] = useState({});
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  /* FILTER LOGIC */
  const filteredItems = itemsData.filter((item) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || item.category === category;
    return matchSearch && matchCategory;
  });

  /* QUANTITY HANDLERS */
  const increaseQty = (id) =>
    setQuantities((p) => ({ ...p, [id]: (p[id] || 1) + 1 }));

  const decreaseQty = (id) =>
    setQuantities((p) => ({
      ...p,
      [id]: p[id] > 1 ? p[id] - 1 : 1,
    }));

  const handleAddToCart = (item) => {
    if (user?.role !== "client") {
      navigate("/login", { state: { from: "/items" } });
      return;
    }
    addToCart({
      ...item,
      quantity: quantities[item.id] || 1,
    });
    // Optional: Add toast notification here later
  };

  return (
    <div className="items-page">
      <Container>
        <div className="store-header">
          <h1>Railway Materials Store</h1>
          <p>Official supply chain for approved railway contractors</p>
        </div>

        <div className="store-layout">
          {/* SIDEBAR */}
          <aside className="store-sidebar">
            <div className="search-box">
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <SearchIcon style={{ position: 'absolute', right: 10, top: 10, color: '#94a3b8' }} />
              </div>
            </div>

            <h3><FilterListIcon fontSize="small" /> Categories</h3>
            <div className="filter-group">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={category === cat ? "active" : ""}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </aside>

          {/* MAIN GRID */}
          <main className="store-grid">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  className="product-card"
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="card-image">
                    <img
                      src={item.image}
                      alt={item.name}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `${import.meta.env.BASE_URL}assets/images/products/no-image.png`;
                      }}
                    />
                  </div>
                  <div className="card-details">
                    <h4>{item.name}</h4>
                    <div className="price">₹ {item.price.toLocaleString()}</div>

                    <div className="actions">
                      <div className="qty-control">
                        <button onClick={() => decreaseQty(item.id)}><RemoveIcon fontSize="small" /></button>
                        <span>{quantities[item.id] || 1}</span>
                        <button onClick={() => increaseQty(item.id)}><AddIcon fontSize="small" /></button>
                      </div>
                      <button className="add-btn" onClick={() => handleAddToCart(item)}>
                        Add <AddShoppingCartIcon fontSize="small" style={{ marginLeft: 4, verticalAlign: 'text-bottom' }} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredItems.length === 0 && (
              <div style={{ textAlign: "center", padding: "2rem", color: "#64748b", gridColumn: "1 / -1" }}>
                <h3>No items found</h3>
                <p>Try adjusting your search or filter.</p>
              </div>
            )}
          </main>
        </div>
      </Container>
    </div>
  );
}

export default Items;
