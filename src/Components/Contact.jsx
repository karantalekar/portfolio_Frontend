// import React, { useEffect } from "react";
// import axios from "axios";

// function Contact() {
//   useEffect(() => {
//     const form = document.getElementById("contactForm");

//     form.addEventListener("submit", async (e) => {
//       e.preventDefault();

//       const contactData = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value,
//       };

//       try {
//         await axios.post("http://localhost:5000/contacts", contactData);

//         alert("Message sent successfully!");
//         e.target.reset();
//       } catch (error) {
//         alert("Failed to send message: " + error.message);
//       }
//     });
//   }, []);

//   return (
//     <section id="contact-section">
//       <h1 className="section-title autoDisplay" style={{ color: "#F9F8F6" }}>
//         Let's talk
//       </h1>

//       <form id="contactForm" className="contact-box autoBlur">
//         <p style={{ color: "#F9F8F6" }}>
//           Whether it’s building a brand-new website, upgrading an existing
//           platform, or turning a unique idea into reality — I make it happen.
//         </p>

//         <p style={{ color: "#F9F8F6" }}>Full Name</p>
//         <input
//           placeholder="Your Full name"
//           type="text"
//           style={{ height: "20%" }}
//           id="name"
//           required
//         />

//         <p style={{ color: "#F9F8F6" }}>Email Address</p>
//         <input
//           placeholder="Your Email"
//           type="email"
//           style={{ height: "20%" }}
//           id="email"
//           required
//         />

//         <p style={{ color: "#F9F8F6" }}>Your Message</p>
//         <input
//           className="input-message"
//           type="text"
//           placeholder="share your thoughts..."
//           id="message"
//           style={{ height: "20%" }}
//           required
//         />

//         <button
//           type="submit"
//           style={{
//             padding: "6px 15px",
//             fontSize: "14px",
//             borderRadius: "8px",
//             backgroundColor: "#0f1217",
//             color: "#F9F8F6",
//             border: "1px solid gray",
//             cursor: "pointer",
//             display: "inline-flex",
//             alignItems: "center",
//             gap: "5px",
//           }}
//         >
//           Send Message <i className="bx bx-mail-send"></i>
//         </button>
//       </form>
//     </section>
//   );
// }

// export default Contact;

import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use your Vercel backend URL
      await axios.post(
        "https://portfolio-backend-roan-omega.vercel.app/contacts",
        formData
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message: " + error.message);
    }
  };

  return (
    <section id="contact-section">
      <h1 className="section-title autoDisplay" style={{ color: "#F9F8F6" }}>
        Let's talk
      </h1>

      <form onSubmit={handleSubmit} className="contact-box autoBlur">
        <p style={{ color: "#F9F8F6" }}>
          Whether it’s building a brand-new website, upgrading an existing
          platform, or turning a unique idea into reality — I make it happen.
        </p>

        <p style={{ color: "#F9F8F6" }}>Full Name</p>
        <input
          placeholder="Your Full name"
          type="text"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <p style={{ color: "#F9F8F6" }}>Email Address</p>
        <input
          placeholder="Your Email"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <p style={{ color: "#F9F8F6" }}>Your Message</p>
        <input
          className="input-message"
          type="text"
          placeholder="Share your thoughts..."
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          style={{
            padding: "6px 15px",
            fontSize: "14px",
            borderRadius: "8px",
            backgroundColor: "#0f1217",
            color: "#F9F8F6",
            border: "1px solid gray",
            cursor: "pointer",
            display: "inline-flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          Send Message <i className="bx bx-mail-send"></i>
        </button>
      </form>
    </section>
  );
}

export default Contact;
