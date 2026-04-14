import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../client/CartContext";
import { AuthContext } from "../auth/AuthContext";

function Cart() {
  const { cartItems, addToCart, removeFromCart } =
    useContext(CartContext);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // 🧮 TOTAL PRICE
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🟡 PROCEED TO BUY (Amazon Logic)
  const handleProceed = () => {
    if (user?.role === "client") {
      navigate("/checkout");
    } else {
      navigate("/login", { state: { from: "/checkout" } });
    }
  };


  // 🟢 EMPTY CART
  if (cartItems.length === 0) {
    return (
      <Container sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h5">Your Cart is Empty</Typography>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() => navigate("/items")}
        >
          Continue Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Shopping Cart
      </Typography>

      {cartItems.map((item) => (
        <Card key={item.id} sx={{ mb: 2, display: "flex" }}>
          <CardMedia
            component="img"
            image={item.image}
            sx={{ width: 140 }}
            onError={(e) =>
              (e.target.src = `${import.meta.env.BASE_URL}assets/images/products/no-image.png`)
            }
          />

          <CardContent sx={{ flex: 1 }}>
            <Typography fontWeight={600}>{item.name}</Typography>
            <Typography color="success.main">
              ₹ {item.price.toLocaleString()}
            </Typography>

            {/* QUANTITY */}
            <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
              <IconButton
                onClick={() =>
                  addToCart({ ...item, quantity: -1 })
                }
              >
                <RemoveIcon />
              </IconButton>

              <Typography>{item.quantity}</Typography>

              <IconButton
                onClick={() =>
                  addToCart({ ...item, quantity: 1 })
                }
              >
                <AddIcon />
              </IconButton>

              <IconButton
                color="error"
                sx={{ ml: 2 }}
                onClick={() => removeFromCart(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          </CardContent>
        </Card>
      ))}

      <Divider sx={{ my: 3 }} />

      {/* TOTAL + PROCEED */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          Total: ₹ {totalAmount.toLocaleString()}
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={handleProceed}
        >
          Proceed to Buy
        </Button>
      </Box>
    </Container>
  );
}

export default Cart;
