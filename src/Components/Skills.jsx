import React from "react";

function Skills() {
  return (
    <section id="skills-section">
      <h1 className="section-title autoDisplay" style={{ color: "#F9F8F6" }}>
        My Skills
      </h1>
      <div className="skills-box autoDisplay">
        <img
          className="skills-image"
          src="/images/digital brain (2).png"
          alt=""
        />
        <div className="Designer">
          <h1 className="gradient">
            Designer <i className="bx bx-laptop"></i>
          </h1>
          <p style={{ color: "#F9F8F6" }}>
            I have expertise in HTML, CSS, JavaScript, and design tools. My
            strength lies in blending aesthetics with functionality to create
            seamless user experiences.
          </p>
        </div>

        <div className="coder">
          <h1 className="gradient" style={{ color: "#F9F8F6" }}>
            Coder <i className="bx bx-code-block"></i>
          </h1>
          <p style={{ color: "#F9F8F6" }}>
            I’m skilled in HTML, CSS, JavaScript, and frameworks like React.js,
            Express.js, Node.js. I also have experience with database management
            using MongoDB.
          </p>
        </div>

        {/* <div
          className="slider"
          reverse="true"
          style={{ "--width": "100px", "--height": "100px", "--quantity": 9 }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 1 }}>
              <img src="/images/12.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src="/images/6.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src="/images/10.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src="/images/11.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src="/images/React.png" alt="" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img
                src="/images/Node.png"
                alt=""
                style={{ height: " 90px", width: "120px" }}
              />
            </div>

            <div className="item" style={{ "--position": 8 }}>
              <img
                src="/images/Express.png"
                alt=""
                style={{
                  height: "100px",
                  width: "120px",
                }}
              />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img
                src="/images/MongoDB.jpg"
                alt=""
                style={{ height: " 60px", width: "90px" }}
              />
            </div>
          </div>
        </div> */}
        <div
          className="slider"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": 9,
          }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 1 }}>
              <img src="/images/12.png" alt="" />
            </div>

            <div className="item" style={{ "--position": 2 }}>
              <img src="/images/6.png" alt="" />
            </div>

            <div className="item" style={{ "--position": 3 }}>
              <img src="/images/10.png" alt="" />
            </div>

            <div className="item" style={{ "--position": 4 }}>
              <img src="/images/11.png" alt="" />
            </div>

            <div className="item" style={{ "--position": 5 }}>
              <img src="/images/React.png" alt="" />
            </div>

            <div className="item" style={{ "--position": 6 }}>
              <img
                src="/images/Node.png"
                alt=""
                style={{
                  height: "90px",
                  width: "120px",
                  objectFit: "contain",
                }}
              />
            </div>

            <div className="item" style={{ "--position": 7 }}>
              <img
                src="/images/Express.png"
                alt=""
                style={{
                  height: "100px",
                  width: "120px",
                  objectFit: "contain",
                }}
              />
            </div>

            <div className="item" style={{ "--position": 8 }}>
              <img
                src="/images/MongoDB.jpg"
                alt=""
                style={{
                  height: "70px",
                  width: "90px",
                  objectFit: "contain",
                  alignContent: "center",
                }}
              />
            </div>

            <div className="item" style={{ "--position": 9 }}>
              <img src="/images/10.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
