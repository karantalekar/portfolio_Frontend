import React from "react";
import "boxicons/css/boxicons.min.css";

function Navbar() {
  return (
    <header data-aos="fade-down" data-aos-duration="2000">
      <div className="left">
        <img
          src="/images/k logo.jpg"
          alt="logo"
          style={{ borderRadius: "50%" }}
        />
        <h2>
          {/* <span style={{ color: "#8FABD4" }}>Karan</span> */}
          <span className="gradient">Karan</span>
        </h2>
      </div>

      <ul>
        <li>
          <a href="#info-section">About</a>
        </li>
        <li>
          <a href="#skills-section">Skills</a>
        </li>
        <li>
          <a href="#my-project">Projects</a>
        </li>
      </ul>

      <div className="box-icons">
        <a href="https://github.com/karantalekar">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/karan-talekar-06k/">
          <i className="bx bxl-linkedin-square"></i>
        </a>
      </div>

      <div className="menu-icon">
        <i className="bx bx-menu"></i>
      </div>
    </header>
  );
}

export default Navbar;
