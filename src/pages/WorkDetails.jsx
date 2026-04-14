import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Breadcrumbs,
  Link as MUILink,
  Button,
  IconButton,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import { useParams, Link } from "react-router-dom";

import workData from "../data/worksData";

/* ================= COMPONENT ================= */

function WorkDetails() {
  const { type } = useParams();
  const data = workData[type];
  const [activeIndex, setActiveIndex] = useState(0);

  if (!data) {
    return (
      <Container sx={{ py: 6 }}>
        <Typography variant="h5">Work not found</Typography>
      </Container>
    );
  }

  const nextImage = () =>
    setActiveIndex((p) => (p === data.images.length - 1 ? 0 : p + 1));

  const prevImage = () =>
    setActiveIndex((p) => (p === 0 ? data.images.length - 1 : p - 1));

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        {/* ================= BREADCRUMB ================= */}
        <Breadcrumbs sx={{ mb: 3 }}>
          <MUILink component={Link} to="/" underline="hover">
            Home
          </MUILink>
          <MUILink component={Link} to="/works" underline="hover">
            Works
          </MUILink>
          <Typography color="text.primary">{data.title}</Typography>
        </Breadcrumbs>

        <Button
          component={Link}
          to="/works"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 3 }}
        >
          Back to Works
        </Button>

        {/* ================= TITLE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" fontWeight="bold">
            {data.title}
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1, maxWidth: 650 }}>
            {data.subtitle}
          </Typography>
        </motion.div>

        <Divider sx={{ my: 4 }} />

        {/* ================= IMAGE SLIDER ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: "900px",
              mx: "auto",
              mb: 5,
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #e5e7eb",
              boxShadow: "0 14px 34px rgba(0,0,0,0.12)",
            }}
          >
            <Box
              component="img"
              src={data.images[activeIndex]}
              alt={data.title}
              sx={{
                width: "100%",
                height: { xs: 220, sm: 260, md: 320 },
                objectFit: "cover",
              }}
            />

            <IconButton onClick={prevImage} sx={sliderBtn("left")}>
              <ArrowBackIosNewIcon />
            </IconButton>

            <IconButton onClick={nextImage} sx={sliderBtn("right")}>
              <ArrowForwardIosIcon />
            </IconButton>

            {/* DOTS */}
            <Box
              sx={{
                position: "absolute",
                bottom: 12,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                gap: 1,
              }}
            >
              {data.images.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  sx={{
                    width: 9,
                    height: 9,
                    borderRadius: "50%",
                    cursor: "pointer",
                    backgroundColor:
                      i === activeIndex
                        ? "#fff"
                        : "rgba(255,255,255,0.5)",
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>

        {/* ================= SCOPE OF WORK ================= */}
        <Typography variant="h5" fontWeight="bold" gutterBottom align="center">
          Scope of Work
        </Typography>

        <Box
          sx={{
            mt: 2,
            p: { xs: 2.5, md: 3 },
            borderRadius: "14px",
            backgroundColor: "#ffffff",
            border: "1px solid #e5e7eb",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          <List sx={{ p: 0 }}>
            {data.items.map((item, index) => (
              <ListItem key={index} sx={{ px: 0 }}>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    sx: {
                      textAlign: "justify",
                      lineHeight: 1.7,
                      fontSize: "0.98rem",
                      color: "#374151",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}

/* ================= STYLES ================= */

const sliderBtn = (side) => ({
  position: "absolute",
  top: "50%",
  [side]: 14,
  transform: "translateY(-50%)",
  backgroundColor: "rgba(0,0,0,0.55)",
  color: "#fff",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.75)",
  },
});

export default WorkDetails;
