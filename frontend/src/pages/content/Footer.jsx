import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.section}>
        <h3 style={styles.heading}>Quick Links</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><a href="#" style={styles.link}>Lab Feedback Form</a></li>
          <li style={styles.listItem}><a href="#" style={styles.link}>Lab Assessment Form</a></li>
          <li style={styles.listItem}><a href="#" style={styles.link}>FAQ</a></li>
          <li style={styles.listItem}><a href="#" style={styles.link}>Shakshat Portal</a></li>
        </ul>
      </div>
      
      <div style={styles.section}>
        <h3 style={styles.heading}>About VLAB</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}><a href="#" style={styles.link}>Home</a></li>
          <li style={styles.listItem}><a href="#" style={styles.link}>About us</a></li>
          <li style={styles.listItem}><a href="#" style={styles.link}>Contact Us</a></li>
        </ul>
      </div>
      <div style={styles.section}>
        <h3 style={styles.heading}>Get In Touch With Us</h3>
        <p style={styles.text}><Mail size={16} /> support@vlab.co.in</p>
        <p style={styles.text}><Phone size={16} /> 011-26582050</p>
        <p style={styles.text}>
          <MapPin size={16} /> Wireless Research Lab, Room No - 206/IIA,<br />
          Bharti School of Telecom, IIT Delhi,<br />
          Hauz Khas, New Delhi-110016
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#262626",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "20px",
    position: "fixed",
    bottom: 0,
    width: "100%",
    fontSize: "14px"
  },
  section: {
    flex: 1,
    textAlign: "center"
  },
  heading: {
    fontSize: "16px",
    fontWeight: "bold"
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0
  },
  listItem: {
    marginTop: "5px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    display: "block"
  },
  qrCode: {
    width: "80px",
    height: "80px"
  },
  text: {
    margin: "5px 0"
  }
};

export default Footer;