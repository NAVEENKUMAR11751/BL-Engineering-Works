import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  Divider,
  Badge,
  Menu,
  MenuItem,
  Avatar,
} from "@mui/material";
import { motion } from "framer-motion";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard"; // Added
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"; // Added
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { Link, useLocation } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../client/CartContext";
import { AuthContext } from "../auth/AuthContext";
import "../styles/Header.scss";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [profileAnchor, setProfileAnchor] = useState(null);

  const { cartItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  /* ================= DARK MODE ================= */
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  /* ================= HELPERS ================= */
  const isActive = (path) =>
    location.pathname === path ||
    location.pathname.startsWith(path + "/");

  /* ================= MOBILE DRAWER ================= */
  const drawerMenu = (
    <Box className="mobile-drawer-content" onClick={() => setDrawerOpen(false)}>
      <List>
        {[
          { text: "Home", path: "/" },
          { text: "Works", path: "/works" },
          { text: "Items", path: "/items" },
          { text: "Contact", path: "/contact" },
          { text: "About", path: "/about" },
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={isActive(item.path)}
            onClick={() => setDrawerOpen(false)}
          >
            <ListItemText primary={item.text} />
          </ListItem>
        ))}

        {user?.role === "admin" && (
          <ListItem button component={Link} to="/admin/dashboard" onClick={() => setDrawerOpen(false)}>
            <ListItemText primary="Dashboard" sx={{ color: "#001e3c", fontWeight: "bold" }} />
          </ListItem>
        )}

        {user?.role === "client" && (
          <ListItem button component={Link} to="/orders" onClick={() => setDrawerOpen(false)}>
            <ListItemText primary="My Orders" sx={{ color: "#001e3c", fontWeight: "bold" }} />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <div className="header-container">
      {/* ================= TOP INFO BAR ================= */}
      <Box className={`top-bar ${darkMode ? "dark" : "light"}`}>
        <Container>
          <Box className="top-bar-content">
            {/* EMAIL */}
            <Box className="info-group">
              <EmailIcon fontSize="small" />
              <Typography variant="body2">
                blengineering@gmail.com
              </Typography>
            </Box>

            {/* ACTIONS */}
            <Box className="action-group">
              <IconButton color="inherit" size="small">
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" size="small">
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" size="small">
                <YouTubeIcon fontSize="small" />
              </IconButton>

              <Divider orientation="vertical" flexItem sx={{ mx: 1, borderColor: "rgba(255,255,255,0.3)" }} />

              {/* DARK / LIGHT TOGGLE */}
              <IconButton
                color="inherit"
                size="small"
                onClick={() => setDarkMode(!darkMode)}
              >
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>

              {/* CART */}
              <Button
                color="inherit"
                size="small"
                component={Link}
                to="/cart"
                startIcon={
                  <Badge badgeContent={cartItems?.length || 0} color="error">
                    <ShoppingCartIcon />
                  </Badge>
                }
              >
                Cart
              </Button>

              {/* LOGIN / PROFILE */}
              {!user ? (
                <Button
                  color="inherit"
                  size="small"
                  component={Link}
                  to="/login"
                >
                  Login
                </Button>
              ) : (
                <>
                  <Button
                    color="inherit"
                    size="small"
                    startIcon={
                      <Avatar sx={{ width: 24, height: 24 }}>
                        {user.role?.[0].toUpperCase()}
                      </Avatar>
                    }
                    onClick={(e) => setProfileAnchor(e.currentTarget)}
                  >
                    {user.role === "admin" ? "Admin" : "Client"}
                  </Button>

                  <Menu
                    anchorEl={profileAnchor}
                    open={Boolean(profileAnchor)}
                    onClose={() => setProfileAnchor(null)}
                  >
                    <MenuItem component={Link} to="/profile" onClick={() => setProfileAnchor(null)}>
                      <PersonIcon fontSize="small" sx={{ mr: 1, color: "#203a43" }} />
                      Profile
                    </MenuItem>

                    {user.role === "admin" && (
                      <MenuItem component={Link} to="/admin/dashboard" onClick={() => setProfileAnchor(null)}>
                        <DashboardIcon fontSize="small" sx={{ mr: 1, color: "#203a43" }} />
                        Dashboard
                      </MenuItem>
                    )}

                    {user.role === "client" && (
                      <MenuItem component={Link} to="/orders" onClick={() => setProfileAnchor(null)}>
                        <ShoppingBagIcon fontSize="small" sx={{ mr: 1, color: "#203a43" }} />
                        My Orders
                      </MenuItem>
                    )}

                    <Divider />
                    <MenuItem
                      onClick={() => {
                        logout();
                        setProfileAnchor(null);
                      }}
                    >
                      <LogoutIcon fontSize="small" sx={{ mr: 1, color: "#d32f2f" }} />
                      Logout
                    </MenuItem>
                  </Menu>
                </>
              )}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ================= MAIN GLASS HEADER ================= */}
      <AppBar
        className={`main-navbar ${darkMode ? "dark" : "light"}`}
        position="sticky"
        elevation={0}
      >
        <Container>
          <Toolbar className="navbar-toolbar">
            {/* BRAND */}
            <Typography
              component={motion.div}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variant="h5"
              className="brand-logo"
            >
              <Link
                to="/"
                className={darkMode ? "dark" : "light"}
              >
                BL Engineering Works
              </Link>
            </Typography>

            {/* DESKTOP MENU */}
            <Box className="desktop-menu">
              {[
                { text: "Home", path: "/" },
                { text: "Works", path: "/works" },
                { text: "Items", path: "/items" },
                { text: "Contact", path: "/contact" },
                { text: "About", path: "/about" },
              ].map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  className={`nav-button ${isActive(item.path) ? "active" : ""}`}
                >
                  {item.text}
                </Button>
              ))}
            </Box>

            {/* MOBILE MENU */}
            <IconButton
              className="mobile-menu-toggle"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        {drawerMenu}
      </Drawer>
    </div>
  );
}

export default Header;
