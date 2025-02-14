import React from "react";
import "../styles/Header.css";
import logo from "../content/VLlogo.png" 
const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo" width={120} />
      <div className="text">
        <p className="initiative">An Initiative of</p>
        <p className="ministry"><strong>Ministry of Education</strong></p>
        <p className="mission">
          Under the National Mission on Education through <span className="ict">ICT</span>
        </p>
      </div>
    </header>
  );
};

export default Header;
