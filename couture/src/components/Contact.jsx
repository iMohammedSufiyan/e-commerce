import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./sass/Contact.scss";

export default function Contact() {
  return (
    <>
      <Navbar />

      <h1 className="text-center py-5 heading">Contact Us</h1>
      <div className="container d-flex my-5 ms-auto">
        <div className="col-8 form-box p-4">
          <h2>Get in Touch !</h2>
          <p>Contact us if you have any questions.</p>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Your Name*"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Your Email*"
              />
            </div>
            <div class="mb-3">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Subject*"
              />
            </div>
            <div class="mb-3">
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="7"
                placeholder="Your Message*"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-secondary">
              Send
            </button>
          </form>
        </div>
        <div className="col-4 p-4 ps-5">
          <h2>Contact Us</h2>
          <p style={{ margin: "3vh 0" }}>
            507-Uneon Trade Centro, New Design Str, Melbourne, Australia
          </p>
          <h2>(+800) 1234 5678 90</h2>
          <hr style={{ margin: "4vh 0" }} />
          <p>Monday - Friday: 9:00-20:00</p>
          <p style={{ lineHeight: "0vh" }}>Saturady: 11:00 - 15:00</p>
          <p>info@example.com</p>
        </div>
      </div>

      <Footer />
    </>
  );
}
