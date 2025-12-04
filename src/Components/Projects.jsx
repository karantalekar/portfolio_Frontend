import React, { useRef } from "react";
import "boxicons/css/boxicons.min.css";

function Projects() {
  const video1 = useRef(null);
  const video2 = useRef(null);
  const video3 = useRef(null);
  const hoverSign = useRef(null);

  const handleMouseOver = (videoRef) => {
    videoRef.current.play();
    hoverSign.current.classList.add("active");
  };

  const handleMouseOut = (videoRef) => {
    videoRef.current.pause();
    hoverSign.current.classList.remove("active");
  };

  return (
    <section id="my-project">
      <h1 className="section-title autoDisplay" style={{ color: "#F9F8F6" }}>
        My Projects 👨‍💻
      </h1>

      <div className="project-card">
        <div
          className="project-vidbox autoBlur"
          onMouseOver={() => handleMouseOver(video1)}
          onMouseOut={() => handleMouseOut(video1)}
        >
          <video loop ref={video1} src="/videos/project1.mp4"></video>
          <div ref={hoverSign} className="hover-sign"></div>
        </div>
        <div className="project-info fadein-left">
          <h1 style={{ color: "#F9F8F6" }}>
            AI <span className="gradient">Code</span> Reviewer
          </h1>
          <p style={{ color: "#F9F8F6" }}>
            Integrated an AI model to provide human-like review comments,
            suggest optimizations, and improve readability.
          </p>
          <button>
            <i className="bx bx-link-external"></i> Website
          </button>
        </div>
      </div>

      <div className="project-card">
        <div
          className="project-vidbox autoBlur"
          onMouseOver={() => handleMouseOver(video2)}
          onMouseOut={() => handleMouseOut(video2)}
        >
          <video loop ref={video2} src="/videos/project2.mp4"></video>
        </div>
        <div className="project-info fadein-left">
          <h1 style={{ color: "#F9F8F6" }}>
            {" "}
            Modern <span className="gradient">Portfolio</span> Website{" "}
          </h1>
          <p style={{ color: "#F9F8F6" }}>
            Projects that move — literally and figuratively.
          </p>
          <button>
            <i className="bx bx-link-external"></i> Website
          </button>
        </div>
      </div>

      <div className="project-card">
        <div
          className="project-vidbox autoBlur"
          onMouseOver={() => handleMouseOver(video3)}
          onMouseOut={() => handleMouseOut(video3)}
        >
          <video loop ref={video3} src="/videos/project3.mp4"></video>
        </div>
        <div className="project-info fadein-left">
          <h1 style={{ color: "#F9F8F6" }}>
            Real<span className="gradient">Time Location</span> Tracker
          </h1>
          <p style={{ color: "#F9F8F6" }}>
            Designed a GPS-powered tracker that streams live locations straight
            onto an interactive map.
          </p>
          <a href="https://realtimetracking-mfia.onrender.com/" target="_blank">
            <button>
              <i className="bx bx-link-external"></i> Website
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
