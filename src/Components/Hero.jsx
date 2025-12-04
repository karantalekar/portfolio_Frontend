import React from "react";

function Hero() {
  return (
    <section className="hero">
      <div
        className="hero-info autoBlur"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div
          className="hero-info-title"
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px", // 👈 adds space between icon & text
            fontSize: "16px",
            width: "fit-content",
          }}
        >
          <i className="bx bxl-sketch"></i>
          Full Stack Developer
        </div>

        <h1
          data-aos="fade-right"
          style={{ color: "#F9F8F6" }}
          data-aos-duration="3000"
        >
          Providing <span className="gradient">the best</span> Project{" "}
          <span className="gradient">Experience</span>
        </h1>

        <p style={{ color: "white" }}>
          I'm a full stack developer with experience in Website and Software
          development. Check out my projects and skills.
        </p>

        <a href="#contact-section">
          <button>
            <i className="bx bx-send"></i> Contact Me
          </button>
        </a>
      </div>

      <div className="skills-video-box">
        <video
          className="skills-video autoBlur"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/hero-video.mp4"
        ></video>
      </div>

      <div className="scroll-down"></div>
    </section>
  );
}

export default Hero;
