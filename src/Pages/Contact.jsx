import { useState } from "react";
import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <div className="contact-page">
      <Nav />
      <main>
      <div className="contact">
        <h2>Let's connect!</h2>

        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="name">Name</label>
          <input
          placeholder="Enter your name"
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          ></input>
          <label htmlFor="email">Email</label>
          <input
          placeholder="Enter your email"
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
          <label htmlFor="message" id="message"></label>
          <textarea
          placeholder="Your message here.."
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button className="button" type="submit">
            Send
          </button>
        </form>
      </div>
      </main>
      <Footer />
    </div>
  );

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch("https://formspree.io/f/xknaqeqb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        console.log("success");
      } else {
        console.log("error", res);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
    // console.log([e.target.name], [e.target.value])
  }
}
