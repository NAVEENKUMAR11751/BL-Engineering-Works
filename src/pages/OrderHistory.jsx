import { useContext, useEffect } from "react";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../order/OrderContext";
import { AuthContext } from "../auth/AuthContext";
import "../styles/OrderHistory.scss";

function OrderHistory() {
    const { user } = useContext(AuthContext);
    const { orders } = useContext(OrderContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    if (!user) return null;

    // Filter orders for current user (assuming user.username matches order.user)
    // In a real app we'd use IDs.
    const myOrders = orders.filter(
        (order) => order.user === user.username
    ).sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className="order-history-page">
            <Container>
                <h1>My Order History</h1>

                <div className="order-list">
                    {myOrders.length > 0 ? (
                        myOrders.map((order) => (
                            <div className="order-card" key={order.id}>
                                <div className="order-header">
                                    <span className="order-id">Order #{order.id}</span>
                                    <span className="order-date">{new Date(order.date).toLocaleString()}</span>
                                </div>
                                <div className="order-body">
                                    <div className="order-summary">
                                        <p><strong>Items:</strong> {order.items.length} products</p>
                                        <p><strong>Payment:</strong> {order.paymentMethod || "COD"}</p>
                                    </div>
                                    <span className={`order-status ${order.status.toLowerCase()}`}>
                                        {order.status}
                                    </span>
                                </div>
                                <div className="order-total">
                                    Total: ₹ {order.total?.toLocaleString()}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="empty-state">
                            <h3>No orders found</h3>
                            <p>It looks like you haven't placed an order yet.</p>
                            <button onClick={() => navigate("/items")}>Start Shopping</button>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default OrderHistory;
