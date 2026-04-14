import { Container, Box } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../styles/ServiceDetails.scss";

const serviceData = {
  civil: {
    title: "Civil Engineering Works",
    subtitle: "Robust Foundation & Infrastructure Solutions",
    description:
      "Our Civil Engineering division specializes in conducting high-precision trenching, structural foundations, and RCC works mandated for railway infrastructure. We adhere to RDSO standards to ensure longevity and safety of track-side equipment.",
    image: "/assets/images/projects/hero.jpg", // Fallback hero
    features: [
      { title: "Cable Trenching", desc: "Excavation and backfilling for signaling & telecom cables." },
      { title: "RCC Foundations", desc: "Prefabricated and cast-in-situ foundations for signals and location boxes." },
      { title: "Track Crossings", desc: "HDD and open-cut method track crossings for cable routing." },
      { title: "Protective Works", desc: "Construction of retaining walls and drainage systems." },
    ],
    gallery: ["/assets/images/projects/civil/civil1.jpg", "/assets/images/projects/rcc/rcc1.jpg"],
  },

  st: {
    title: "S&T Infrastructure",
    subtitle: "Signaling & Telecommunication Excellence",
    description:
      "We provide end-to-end solutions for Railway Signaling and Telecommunication (S&T). From OFC laying to the installation of color light signals, our team ensures seamless communication and fail-safe train operations.",
    image: "/assets/images/projects/st/st1.jpg",
    features: [
      { title: "OFC Laying", desc: "Optical Fiber Cable blowing, splicing, and termination." },
      { title: "Signal Units", desc: "Installation of multi-aspect color light signals." },
      { title: "Point Machines", desc: "Fixing and ground connection of electric point machines." },
      { title: "Location Boxes", desc: "Wiring and termination of apparatus cases." },
    ],
    gallery: ["/assets/images/projects/st/st1.jpg", "/assets/images/projects/ofc.jpg"],
  },

  electrical: {
    title: "Electrical & Earthing",
    subtitle: "Powering Railway Safety",
    description:
      "Our electrical division focuses on track-side electrification and safety earthing. We execute maintenance-free earthing for sensitive equipment and general electrical distribution for railway stations and yards.",
    image: "/assets/images/projects/electrical/electrical1.jpg",
    features: [
      { title: "Maintenance Free Earthing", desc: "Chemical earthing for signaling equipment protection." },
      { title: "Power Distribution", desc: "Laying of LT/HT cables and panel installation." },
      { title: "Lighting Systems", desc: "Yard lighting and station building electrification." },
      { title: "Equipment Bonding", desc: "Track circuit bonding and traction return bonding." },
    ],
    gallery: ["/assets/images/projects/electrical/electrical1.jpg", "/assets/images/projects/earthing.jpg"],
  },
};

function ServiceDetails() {
  const { serviceId } = useParams();
  const service = serviceData[serviceId];

  if (!service) {
    return (
      <Container sx={{ py: 10, textAlign: "center" }}>
        <h1>Service Not Found</h1>
        <Link to="/" style={{ color: "#3b82f6", textDecoration: "none" }}>
          Return Home
        </Link>
      </Container>
    );
  }

  return (
    <div className="service-details-page">
      {/* HEADER */}
      <div
        className="service-header"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="header-content">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>{service.title}</h1>
            <p>{service.subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* CONTENT */}
      <Container maxWidth="lg">
        <motion.div
          className="service-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link to="/" style={{ display: "inline-flex", alignItems: "center", textDecoration: "none", color: "#64748b", marginBottom: "1rem" }}>
            <ArrowBackIcon fontSize="small" sx={{ mr: 0.5 }} /> Back to Home
          </Link>

          <h2>Overview</h2>
          <p>{service.description}</p>

          <h2>Key Capabilities</h2>
          <div className="features-grid">
            {service.features.map((feature, idx) => (
              <div className="feature-item" key={idx}>
                <div className="icon-box">
                  <CheckCircleIcon />
                </div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2>Project Gallery</h2>
          <div className="service-gallery">
            <div className="gallery-grid">
              {service.gallery.map((img, i) => (
                <motion.div
                  className="gallery-item"
                  key={i}
                  whileHover={{ scale: 1.02 }}
                >
                  <img src={img} alt={`Work ${i}`} onError={(e) => e.target.style.display = 'none'} />
                </motion.div>
              ))}
            </div>
          </div>

        </motion.div>
      </Container>
    </div>
  );
}

export default ServiceDetails;
