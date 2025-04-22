import React from "react";
import Navbar from "./Navbar";
// import "./Header.css"; // Ensure to create this CSS file

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Logo and Site Name */}
      <div className="logo-container">
        <img src="/logo.png" alt="Elderly Care Logo" className="logo" />
        <h1 className="site-name">Elderly Care</h1>
      </div>

      {/* Navigation Menu */}
      <Navbar />
    </header>
  );
};

export default Header;
