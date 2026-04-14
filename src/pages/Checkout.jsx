import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Button,
} from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { CartContext } from "../client/CartContext";
import { AuthContext } from "../auth/AuthContext";
import { OrderContext } from "../order/OrderContext";
import { useToast } from "../components/ToastContext";
import "../styles/Checkout.scss";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { addOrder } = useContext(OrderContext);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [isOrdering, setIsOrdering] = useState(false);

  // Calculations
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const cgst = subtotal * 0.09;
  const sgst = subtotal * 0.09;
  const grandTotal = subtotal + cgst + sgst;

  const handlePlaceOrder = () => {
    if (!user) {
      showToast("Please login to place an order", "error");
      navigate("/login");
      return;
    }
    if (cartItems.length === 0) {
      showToast("Your cart is empty!", "warning");
      return;
    }
    if (!address.trim()) {
      showToast("Please enter a shipping address", "error");
      return;
    }

    setIsOrdering(true);

    // Simulate API call
    setTimeout(() => {
      const newOrder = {
        id: Date.now(),
        user: user.username || "Client", // Fallback if username missing
        items: cartItems,
        total: grandTotal,
        status: "Pending",
        date: new Date().toLocaleString(),
        address: address,
        paymentMethod: paymentMethod
      };

      addOrder(newOrder);
      clearCart();
      showToast("Order placed successfully!", "success");
      setIsOrdering(false);
      navigate("/order-success");
    }, 1500);
  };

  if (cartItems.length === 0) {
    return (
      <div className="checkout-page" style={{ textAlign: "center", paddingTop: "100px" }}>
        <h2>Your Cart is Empty</h2>
        <button className="btn-link" onClick={() => navigate("/items")} style={{ marginTop: "20px", color: "#3b82f6", background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem" }}>
          Browse Products
        </button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <Container>
        <h1>Secure Checkout</h1>

        <div className="checkout-container">
          {/* LEFT COLUMN: DETAILS */}
          <motion.div
            className="checkout-form-section"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Shipping Information</h2>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" defaultValue={user?.username || ""} disabled className="bg-gray-100" />
            </div>

            <div className="form-group">
              <label>Delivery Address</label>
              <textarea
                rows="4"
                placeholder="Enter complete address..."
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              ></textarea>
            </div>

            <h2 style={{ marginTop: "2rem" }}>Payment Method</h2>
            <div className="form-group">
              <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                <option value="COD">Cash on Delivery (COD)</option>
                <option value="UPI">UPI / Net Banking</option>
                <option value="Credit Card">Credit / Debit Card</option>
              </select>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: SUMMARY */}
          <motion.div
            className="order-summary-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Order Summary</h3>
            <div className="summary-items">
              {cartItems.map(item => (
                <div className="summary-item" key={item.id}>
                  <div className="item-name">
                    <span>{item.quantity}x</span> {item.name}
                  </div>
                  <div className="item-price">₹ {(item.price * item.quantity).toLocaleString()}</div>
                </div>
              ))}
            </div>

            <div className="summary-total">
              <div className="row">
                <span>Subtotal</span>
                <span>₹ {subtotal.toLocaleString()}</span>
              </div>
              <div className="row">
                <span>CGST (9%)</span>
                <span>₹ {cgst.toLocaleString()}</span>
              </div>
              <div className="row">
                <span>SGST (9%)</span>
                <span>₹ {sgst.toLocaleString()}</span>
              </div>
              <div className="row final">
                <span>Total Payable</span>
                <span>₹ {grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <button
              className="place-order-btn"
              onClick={handlePlaceOrder}
              disabled={isOrdering}
            >
              {isOrdering ? "Processing..." : "Place Order"}
            </button>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Checkout;
