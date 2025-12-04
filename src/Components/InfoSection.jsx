import React from "react";

function InfoSection() {
  return (
    <section
      id="info-section"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
        paddingBottom: "50px",
        overflow: "hidden",
      }}
    >
      {/* Background Galaxy Video */}
      <video
        src="/videos/galaxy.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          opacity: 0.3, // optional: adjust to make content readable
        }}
      />

      {/* Section Title */}
      <h1
        className="section-title autoDisplay"
        style={{
          color: "#F9F8F6",
          fontSize: "40px",
          fontWeight: 700,
          marginBottom: "40px",
          zIndex: 1,
          position: "relative",
        }}
      >
        Hello,There👋
      </h1>

      {/* Cards Container */}
      <div
        className="info-cards"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          width: "90%",
          zIndex: 1,
          position: "relative",
        }}
      >
        {/* card 1 */}
        <div
          className="card"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // push image to top, text to bottom
            alignItems: "center",
            position: "relative",
            backgroundColor: "rgba(8, 0, 32, 0.7)",
            borderRadius: "20px",
            padding: "20px",
            minHeight: "250px",
          }}
        >
          <img
            src="/images/grid1.png"
            alt=""
            style={{ width: "90%", borderRadius: "10px", objectFit: "cover" }}
          />

          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#F9F8F6" }}>Hi there, I'm Karan</h1>
            <p style={{ color: "#F9F8F6" }}>
              I have honed my skills in both frontend and backend dev, creating
              dynamic and responsive websites.
            </p>
          </div>
        </div>

        {/* card 2 */}

        <div
          className="card"
          style={{
            position: "relative",
            backgroundColor: "rgba(8, 0, 32, 0.7)",
            borderRadius: "20px",
            padding: "20px",
            minHeight: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between", // pushes first child to top, last child to bottom
            alignItems: "center",
          }}
        >
          <img
            src="/images/grid2.png"
            alt=""
            style={{
              width: "73%", // bigger width
              height: "150px", // adjust height as per your need
              objectFit: "cover",
              borderRadius: "10px",
              margin: "-10px auto",
            }}
          />

          <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "#F9F8F6" }}>Tech Stack</h1>
            <p style={{ color: "#F9F8F6" }}>
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications.
            </p>
          </div>
        </div>

        {/* card 3 */}

        <div
          className="card"
          style={{
            position: "relative",
            backgroundColor: "rgba(8, 0, 32, 0.7)",
            borderRadius: "20px",
            paddingTop: "180px", // space for video
            padding: "20px",
            minHeight: "300px",
          }}
        >
          <video
            src="/videos/glob.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              backgroundColor: "transparent",
              top: "20px",
              left: "20px",
              right: "20px",
              width: "calc(100% - 40px)",
              borderRadius: "10px",
            }}
          />

          <h1 style={{ color: "#F9F8F6" }}>
            I’m very flexible with time zone communications & locations
          </h1>

          <a href="#contact-section">
            <button
              style={{
                marginTop: "10px",
                padding: "10px 25px",
                borderRadius: "10px",
                border: "1px solid gray",
                backgroundColor: "#0f1217",
                color: "gray",
                cursor: "pointer",
              }}
            >
              <i className="bx bx-send"></i> Contact Me
            </button>
          </a>
        </div>

        {/* card 4 */}

        <div
          className="card"
          style={{
            position: "relative",
            backgroundColor: "rgba(8, 0, 32, 0.7)",
            borderRadius: "20px",
            padding: "20px",
            minHeight: "250px",
            height: "88%",
          }}
        >
          <img
            src="/images/grid4.png"
            alt=""
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              display: "block",
              margin: "0 auto",
              marginTop: "-10px",
            }}
          />

          <h1 style={{ color: "#F9F8F6" }}>My Passion for Coding</h1>

          <p style={{ color: "#F9F8F6" }}>
            I love solving problems and building things through code.
            Programming isn't just my profession—it's my passion. I enjoy
            exploring new technologies and enhancing my skills.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
