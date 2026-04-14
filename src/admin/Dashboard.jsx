import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import InventoryIcon from "@mui/icons-material/Inventory";

import { AuthContext } from "../auth/AuthContext";
import { OrderContext } from "../order/OrderContext";
import "../styles/AdminDashboard.scss";

function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const { orders } = useContext(OrderContext);
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("overview");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Stats
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((acc, order) => acc + (order.total || 0), 0);
  const pendingOrders = orders.filter(o => o.status === "Pending").length;

  return (
    <div className="admin-dashboard">
      {/* SIDEBAR */}
      <aside className="admin-sidebar">
        <div className="brand">BL Admin</div>
        <nav>
          <button className={activeTab === "overview" ? "active" : ""} onClick={() => setActiveTab("overview")}>
            <DashboardIcon fontSize="small" /> Overview
          </button>
          <button className={activeTab === "orders" ? "active" : ""} onClick={() => setActiveTab("orders")}>
            <ShoppingBagIcon fontSize="small" /> Orders
          </button>
          <button className={activeTab === "products" ? "active" : ""} onClick={() => setActiveTab("products")}>
            <InventoryIcon fontSize="small" /> Products
          </button>
          <button className={activeTab === "users" ? "active" : ""} onClick={() => setActiveTab("users")}>
            <PeopleIcon fontSize="small" /> Customers
          </button>
          <button className={activeTab === "settings" ? "active" : ""} onClick={() => setActiveTab("settings")}>
            <SettingsIcon fontSize="small" /> Settings
          </button>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          <LogoutIcon fontSize="small" /> Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="admin-content">
        <header>
          <h1>Dashboard Overview</h1>
          <div className="user-profile">
            <span>Welcome, {user?.username || "Admin"}</span>
          </div>
        </header>

        {/* STATS CARDS */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="icon blue"><AttachMoneyIcon /></div>
            <div className="info">
              <h3>Total Revenue</h3>
              <p>₹ {totalRevenue.toLocaleString()}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="icon orange"><ShoppingBagIcon /></div>
            <div className="info">
              <h3>Total Orders</h3>
              <p>{totalOrders}</p>
            </div>
          </div>
          <div className="stat-card">
            <div className="icon green"><InventoryIcon /></div>
            <div className="info">
              <h3>Pending Orders</h3>
              <p>{pendingOrders}</p>
            </div>
          </div>
        </div>

        {/* RECENT ORDERS TABLE */}
        <section className="recent-orders">
          <div className="table-header">
            <h2>Recent Orders</h2>
            <button className="btn-link" style={{ color: '#3b82f6', background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.slice(0, 5).map((order) => (
                  <tr key={order.id}>
                    <td>#{order.id}</td>
                    <td>{order.user}</td>
                    <td>{new Date(order.date).toLocaleDateString()}</td>
                    <td>₹ {order.total?.toLocaleString()}</td>
                    <td>
                      <span className={`status-badge ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center", padding: "2rem", color: "#64748b" }}>
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
