import { Container, Grid, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SpeedIcon from "@mui/icons-material/Speed";
import EngineeringIcon from "@mui/icons-material/Engineering";

import workData from "../data/worksData";
import "../styles/Home.scss";

// Get top 3 works for preview
const recentWorks = Object.values(workData).slice(0, 3);

const clients = [
  { name: "Indian Railways", img: `${import.meta.env.BASE_URL}assets/images/clients/indian-railways.png` },
  { name: "L&T", img: `${import.meta.env.BASE_URL}assets/images/clients/larsen-toubro.png` },
  { name: "RVNL", img: `${import.meta.env.BASE_URL}assets/images/clients/rvnl.png` },
  { name: "IRCON", img: `${import.meta.env.BASE_URL}assets/images/clients/ircon.png` },
];

function Home() {
  return (
    <div className="home-page">
      {/* ================= HERO SECTION 2.0 ================= */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <Container maxWidth="lg" className="hero-container">
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="hero-badge">
                  <VerifiedUserIcon fontSize="small" /> ISO 9001:2015 CERTIFIED
                </div>
                <h1>
                  Engineering the <br />
                  <span className="gradient-text">Future of Railways</span>
                </h1>
                <p className="hero-subtitle">
                  Premier turn-key solutions for Civil, Signaling, Telecommunication, and Electrical infrastructure across Indian Railways.
                </p>
                <div className="hero-actions">
                  <Link to="/works" className="btn-primary">
                    Explore Portfolio
                  </Link>
                  <Link to="/contact" className="btn-outline">
                    Get a Quote
                  </Link>
                </div>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </section>

      {/* ================= STATS BANNER ================= */}
      <div className="stats-banner">
        <Container>
          <Grid container spacing={4} justifyContent="center">
            {[
              { label: "Years Experience", value: "15+" },
              { label: "Projects Delivered", value: "500+" },
              { label: "Route Km Covered", value: "2500+" },
              { label: "Skilled Workforce", value: "200+" },
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <motion.div
                  className="stat-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="section bg-white why-us-section">
        <Container>
          <div className="section-header">
            <span className="subtitle">Core Values</span>
            <h2>Why Partner With Us?</h2>
          </div>

          <Grid container spacing={3}>
            {[
              {
                icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />,
                title: "Safety First",
                desc: "Zero-compromise approach to site safety and regulatory compliance.",
                color: "#10b981"
              },
              {
                icon: <EngineeringIcon sx={{ fontSize: 40 }} />,
                title: "Technical Expertise",
                desc: "Specialized teams for S&T, Civil, and Electrical engineering challenges.",
                color: "#3b82f6"
              },
              {
                icon: <SpeedIcon sx={{ fontSize: 40 }} />,
                title: "Timely Execution",
                desc: "Proven track record of delivering complex projects within deadlines.",
                color: "#f59e0b"
              },
              {
                icon: <VerifiedUserIcon sx={{ fontSize: 40 }} />, // Using verified icon as placeholder for quality
                title: "Quality Assurance",
                desc: "ISO Certified processes ensuring world-class output in every project.",
                color: "#8b5cf6"
              }
            ].map((item, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <motion.div
                  className="feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="icon-box" style={{ color: item.color, background: `${item.color}15` }}>
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* ================= RECENT WORKS (DYNAMIC) ================= */}
      <section className="section bg-light works-preview-section">
        <Container>
          <div className="section-header">
            <span className="subtitle">Our Expertise</span>
            <h2>Recent Projects</h2>
            <p>A glimpse into our diverse portfolio of railway infrastructure works.</p>
          </div>

          <Grid container spacing={3}>
            {recentWorks.map((work, index) => (
              <Grid item xs={12} sm={4} md={4} key={work.id}>
                <motion.div
                  className="project-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="card-image">
                    <img src={work.images[0]} alt={work.title} />
                    <div className="overlay">
                      <Link to="/works" className="view-btn">View All</Link>
                    </div>
                  </div>
                  <div className="card-content">
                    <h3>{work.title}</h3>
                    <p>{work.desc}</p>
                    <Link to="/works" className="text-link">
                      Read More <ArrowForwardIcon fontSize="small" />
                    </Link>
                  </div>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 6 }}>
            <Link to="/works">
              <Button variant="outlined" size="large" sx={{ border: "2px solid", fontWeight: "bold" }}>
                View Full Portfolio
              </Button>
            </Link>
          </Box>
        </Container>
      </section>

      {/* ================= CLIENTS ================= */}
      <section className="section bg-white">
        <Container>
          <div className="section-header">
            <span className="subtitle">Trusted By</span>
            <h2>Our Esteemed Clients</h2>
          </div>
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div className="client-logo-wrapper" key={index}>
                <img src={client.img} alt={client.name} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ================= CTA ================= */}
      <section className="cta-section">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today for world-class railway engineering solutions.</p>
            <Link to="/contact" className="btn-white">
              Get in Touch
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
