import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
        <h1 className="title">Virtual Labs</h1>
      <div className="text">
        <p className="initiative">An Initiative of</p>
        <p className="ministry"><strong>Ministry of Education</strong></p>
        <p className="mission">
          Under the National Mission on Education through <span className="ict">ICT</span>
        </p>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search Lab" />
        <button>🔍</button>
      </div>
    </header>
  );
};

export default Header;
