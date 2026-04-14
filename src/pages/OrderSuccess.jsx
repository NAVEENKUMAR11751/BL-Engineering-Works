import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "../styles/OrderSuccess.scss";

function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="order-success-page">
      <div className="success-card">
        <div className="icon-container">
          <CheckCircleIcon />
        </div>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for shopping with BL Engineering Works. Your order has been confirmed and will be shipped shortly.</p>

        <div className="order-actions">
          <button className="btn-primary" onClick={() => navigate("/orders")}>
            View My Orders
          </button>
          <button className="btn-secondary" onClick={() => navigate("/items")}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
