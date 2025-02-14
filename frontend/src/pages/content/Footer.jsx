import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <div style={styles.pageContainer}>
      <div style={styles.content}>
        {}
      </div>
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.section}>
            <h3 style={styles.heading}>Quick Links</h3>
            <ul style={styles.list}>
              <li><a href="#">Lab Feedback Form</a></li>
              <li><a href="#">Lab Assessment Form</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shakshat Portal</a></li>
            </ul>
          </div>
          <div style={styles.section}>
            <h3 style={styles.heading}>About VLAB</h3>
            <ul style={styles.list}>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div style={styles.section}>
            <h3 style={styles.heading}>Get In Touch With Us</h3>
            <p>📧 support@vlab.co.in</p>
            <p>📞 011-26582050</p>
            <p>📍 Wireless Research Lab, Room No - 206/IIA, Bharti School of Telecom, IIT Delhi, Hauz Khas, New Delhi-110016</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const styles = {
  pageContainer: {
    minHeight: "140vh", // Ensures scrolling
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: 1, // Pushes footer down
  },
  footer: {
    backgroundColor: "#262626",
    color: "white",
    padding: "20px 40px",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  section: {
    flex: 1,
    padding: "10px",
  },
  heading: {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
};

export default Footer;