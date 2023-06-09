import { useState } from "react";
import { useForm } from "@formspree/react";
import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  const [state, handleSubmit] = useForm("xknaqeqb");

  return (
    <div className="contact-page">
      <Nav />
      <main>
        <div className="contact">
          <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Let's connect!</h2>
            <label htmlFor="name">Name</label>
            <input
              placeholder="Enter your name"
              type="text"
              name="name"
              id="name"
              // value={formData.name}
              // onChange={handleChange}
            ></input>
            <label htmlFor="email">Email</label>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
              // value={formData.email}
              // onChange={handleChange}
            ></input>
            <label htmlFor="message" id="message"></label>
            <textarea
              rows="5"
              placeholder="Your message here.."
              name="message"
              // value={formData.message}
              // onChange={handleChange}
            ></textarea>
            <button className="button" type="submit">
              Send
            </button>
            {state.succeeded ? (
              <p className="success">Message sent. Thanks for reaching out!</p>
            ) : null}
            {state.errors.length ? (
              <p className="error">Something went wrong...</p>
            ) : null}
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   setErrors(false);
  //   try {
  //     const res = await fetch(
  //       "https://cors-anywhere.herokuapp.com/https://formspree.io/f/xknaqeqb",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       }
  //     );
  //     if (res.ok) {
  //       console.log("success");
  //     } else {
  //       setErrors(true);
  //       console.log("error", res);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // function handleChange(e) {
  //   setFormData({ ...formData, [e.target.name]: [e.target.value] });
  //   // console.log([e.target.name], [e.target.value])
  // }
}
