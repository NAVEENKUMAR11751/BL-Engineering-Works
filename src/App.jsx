import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import ScrollToTop from "./components/ScrollToTop"; // Added import

import Login from "./auth/Login";
import ProtectedRoute from "./auth/ProtectedRoute"; // Added import
import AdminRoute from "./admin/AdminRoute"; // Added import

import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Items from "./pages/Items"; // Import Items Page
import ServiceDetails from "./pages/ServiceDetails";
import Checkout from "./pages/Checkout";
import OrderHistory from "./pages/OrderHistory"; // Import OrderHistory
import OrderSuccess from "./pages/OrderSuccess"; // Import OrderSuccess

import Dashboard from "./admin/Dashboard";

function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatedBackground />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/items" element={<Items />} /> {/* Add Items Route */}
        <Route path="/login" element={<Login />} />

        {/* Client Protected Routes */}
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <OrderHistory />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order-success"
          element={
            <ProtectedRoute>
              <OrderSuccess />
            </ProtectedRoute>
          }
        />

        {/* Admin Protected Routes */}
        <Route
          path="/admin/*"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
