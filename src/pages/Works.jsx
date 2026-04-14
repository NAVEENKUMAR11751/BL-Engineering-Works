import { Container, Grid, Chip, Box, Typography, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import workData from "../data/worksData";
import "../styles/Works.scss";

function Works() {
  const [searchTerm, setSearchTerm] = useState("");

  // Convert object to array with keys for linking
  const worksArray = Object.entries(workData).map(([key, data]) => ({
    key,
    ...data,
  }));

  const filteredWorks = worksArray.filter((work) => {
    const term = searchTerm.toLowerCase();
    return (
      work.title.toLowerCase().includes(term) ||
      work.desc.toLowerCase().includes(term) ||
      work.items.some((item) => item.toLowerCase().includes(term))
    );
  });

  return (
    <div className="works-page">
      {/* ================= HERO ================= */}
      <div className="works-hero">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Service Portfolio</h1>
          <p>Comprehensive Railway Infrastructure Solutions</p>
        </motion.div>
      </div>

      <Container className="works-container" maxWidth="lg">
        {/* ================= SEARCH ================= */}
        <div className="works-controls">
          <TextField
            fullWidth
            placeholder="Search services (e.g., 'Trenching', 'OFC', 'Earthing')..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
            }}
            sx={{ maxWidth: 600, mx: "auto", display: "block", bgcolor: "white", borderRadius: 1 }}
          />
        </div>

        {/* ================= CATALOG GRID ================= */}
        <div className="catalog-grid">
          <AnimatePresence>
            {filteredWorks.map((work, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
                className="catalog-card"
                key={work.key}
              >
                <div className="card-image">
                  <img src={work.images[0]} alt={work.title} />
                  <div className="overlay" />
                </div>

                <div className="card-content">
                  <div className="card-header">
                    <Typography variant="caption" className="id-badge">
                      0{work.id}
                    </Typography>
                    <h3>{work.title}</h3>
                  </div>

                  <p className="description">{work.desc}</p>

                  <div className="tags-preview">
                    {work.items.slice(0, 3).map((item, i) => (
                      <Chip key={i} label={item} size="small" className="service-chip" />
                    ))}
                    {work.items.length > 3 && (
                      <Chip label={`+${work.items.length - 3} more`} size="small" variant="outlined" />
                    )}
                  </div>

                  <Link to={`/works/${work.key}`} className="details-btn">
                    View Full Scope <ArrowForwardIcon fontSize="small" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredWorks.length === 0 && (
            <div className="no-results">
              <Typography variant="h6" color="textSecondary">
                No services found matching "{searchTerm}"
              </Typography>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default Works;
