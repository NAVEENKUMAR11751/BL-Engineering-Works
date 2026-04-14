import { Container, Box } from "@mui/material"; // Removed unused imports
import { motion } from "framer-motion";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star"; // Changed to Star for Mission/Quality
import HandshakeIcon from "@mui/icons-material/Handshake";

import "../styles/About.scss";

function About() {
  return (
    <div className="about-page">
      {/* HERO */}
      <div className="about-hero">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1>About BL Engineering</h1>
            <p>Driving Innovation in Railway Infrastructure Since 2010</p>
          </motion.div>
        </div>
      </div>

      {/* STORY SECTION */}
      <Container>
        <section className="about-story">
          <div className="story-grid">
            <motion.div
              className="story-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="/assets/images/projects/trenching.jpg" alt="Our Work Site" onError={(e) => e.target.style.display = 'none'} />
            </motion.div>

            <motion.div
              className="story-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Our Journey</h2>
              <p>
                BL Engineering Works was established with a singular vision: to become the most trusted partner for Indian Railways infrastructure development. Over the last decade, we have grown from a small civil contractor to a full-fledged engineering firm handling complex Signaling, Telecommunication, and Electrical projects.
              </p>
              <p>
                Based in Vetapalem, Andhra Pradesh, we have successfully executed critical projects across the South Central Railway zone, earning a reputation for technical excellence and uncompromising safety standards.
              </p>
            </motion.div>
          </div>
        </section>
      </Container>

      {/* VISION & MISSION */}
      <section className="vision-section">
        <Container>
          <div className="vision-grid">
            {[
              { title: "Our Vision", icon: <VisibilityIcon color="primary" />, text: "To be the leading railway infrastructure company in India, known for innovation, sustainable practices, and timely project delivery." },
              { title: "Our Mission", icon: <StarIcon color="warning" />, text: "To deliver high-quality engineering solutions that enhance the safety and efficiency of the national railway network." },
              { title: "Core Values", icon: <HandshakeIcon color="success" />, text: "Integrity, Safety First, Technical Excellence, and Customer-Centricity form the bedrock of our operations." },
            ].map((item, index) => (
              <motion.div
                className="vision-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h3>{item.icon} {item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

    </div>
  );
}

export default About;
