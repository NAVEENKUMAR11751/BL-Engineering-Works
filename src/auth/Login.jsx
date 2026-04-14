import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  function handleAdminLogin() {
    login({ username: "Admin User", role: "admin" });
    navigate("/admin/dashboard");
  }

  function handleClientLogin() {
    login({ username: "Client User", role: "client" });
    navigate(location.state?.from?.pathname || "/");
  }

  return (
    <>
      <h2>Login</h2>

      <button onClick={handleAdminLogin}>Login as Admin</button>
      <br /><br />
      <button onClick={handleClientLogin}>Login as Client</button>
    </>
  );
}

export default Login;
