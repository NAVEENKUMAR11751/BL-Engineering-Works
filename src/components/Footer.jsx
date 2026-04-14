import { Box, Container, Typography, Grid, Link as MuiLink, IconButton, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer-container">
      <Container>
        <div className="footer-content">

          {/* BRAND SECTION */}
          <div className="brand-section">
            <Typography variant="h6" className="brand-title">
              BL Engineering Works
            </Typography>
            <Typography variant="body2" className="brand-desc">
              Your trusted partner in Railway Civil, S&T, and Electrical
              infrastructure development. Delivering excellence since 2010.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton sx={{ color: "white" }} size="small">
                <FacebookIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }} size="small">
                <TwitterIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }} size="small">
                <LinkedInIcon />
              </IconButton>
              <IconButton sx={{ color: "white" }} size="small">
                <InstagramIcon />
              </IconButton>
            </Box>
          </div>

          {/* QUICK LINKS */}
          <div className="links-section">
            <Typography variant="h6" className="links-title">
              Quick Links
            </Typography>
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About Us</Link>
            <Link to="/works" className="footer-link">Our Works</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>

          {/* CONTACT INFO */}
          <div className="contact-section">
            <Typography variant="h6" className="contact-title">
              Contact Us
            </Typography>

            <div className="contact-item">
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">
                Vetapalem, Andhra Pradesh – 523155
              </Typography>
            </div>

            <div className="contact-item">
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">
                +91 88971 35264
              </Typography>
            </div>

            <div className="contact-item">
              <EmailIcon fontSize="small" />
              <Typography variant="body2">
                blengineeringworks@gmail.com
              </Typography>
            </div>
          </div>

        </div>
      </Container>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <Typography variant="body2">
          © {new Date().getFullYear()} BL Engineering Works. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
