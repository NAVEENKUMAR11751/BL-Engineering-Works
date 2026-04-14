import { useState } from "react";
import { Container, Button, TextField, Alert } from "@mui/material";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";

import "../styles/Contact.scss";

function Contact() {
  const contactInfo = [
    {
      icon: <PhoneIcon />,
      title: "Phone Number",
      lines: ["+91 88971 35264"],
    },
    {
      icon: <EmailIcon />,
      title: "Email Address",
      lines: ["blengineeringworks@gmail.com"],
    },
    {
      icon: <LocationOnIcon />,
      title: "Location",
      lines: ["Vetapalem, Andhra Pradesh – 523155"],
    },
    {
      icon: <AccessTimeIcon />,
      title: "Working Hours",
      lines: ["Monday – Saturday", "09:00 AM – 06:00 PM"],
    },
  ];

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message
    setTimeout(() => {
      setIsSubmitted(true);
      e.target.reset(); // Reset form
      setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5 seconds
    }, 500);
  };

  return (
    <div className="contact-page">
      {/* ================= HERO ================= */}
      <div className="contact-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Contact Us</h1>
          <p>Get in touch with us for enquiries and project discussions</p>
        </motion.div>
      </div>

      <Container maxWidth="lg" className="contact-container">
        <div className="contact-content">
          {/* ================= INFO CARD ================= */}
          <motion.div
            className="info-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Get In Touch</h2>
            <div className="info-list">
              {contactInfo.map((info, index) => (
                <div className="info-item" key={index}>
                  <div className="icon-box">{info.icon}</div>
                  <div className="info-text">
                    <h3>{info.title}</h3>
                    {info.lines.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ================= FORM CARD ================= */}
          <motion.div
            className="form-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2>Send us a Message</h2>
            <p>Fill out the form below and our team will respond shortly.</p>

            {isSubmitted && (
              <Alert severity="success" sx={{ mb: 3 }}>
                Your message has been sent successfully! We will get back to you soon.
              </Alert>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <TextField label="First Name" variant="outlined" fullWidth required />
                <TextField label="Last Name" variant="outlined" fullWidth />
              </div>
              <div className="form-row">
                <TextField label="Mobile Number" variant="outlined" fullWidth required />
                <TextField label="Email Address" variant="outlined" fullWidth required />
              </div>
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                endIcon={<SendIcon />}
                className="btn-submit"
                fullWidth
              >
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
