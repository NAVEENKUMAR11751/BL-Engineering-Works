import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

function AdminRoute({ children }) {
    const { user } = useContext(AuthContext);
    const location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (user.role !== "admin") {
        // Determine where to redirect unauthorized users
        return <Navigate to="/" replace />;
    }

    return children;
}

export default AdminRoute;
