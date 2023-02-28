import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./sass/AboutUs.scss";
import img1 from "../images/Fashion-stylist-and-influencer.jpg";
import img2 from "../images/Lindsey-Holland-aka-Ropes.jpg";
import img3 from "../images/Love-Super-positive-Captions.jpg";
import img4 from "../images/Penchant-for-dreamy-Travels.jpg";
import img5 from "../images/Randomised-words-which-dont-look.jpg";
import img6 from "../images/Shot-From-The-Street.jpg";
import men1 from "../images/men1.jpg";
import men2 from "../images/men2.jpg";
import women1 from "../images/women1.jpg";
import "../../node_modules/flickity/css/flickity.css";
import iconic from "../images/iconic.png";
import travel from "../images/travel.png";
import vintage from "../images/vintage.png";
import natural from "../images/natural.png";

export default function () {
  return (
    <>
      <Navbar />

      <h1 className="text-center py-5 heading">About Us</h1>

      <div className="container p-5">
        <h2 className="mb-4">History Of Our Company</h2>
        <p>
          Welcome to Sarcom, We are inspired by the realities of life today, in
          which traditional divides between personal and the professional space
          are more fluid, so our furniture, lighting, and accessories can be
          used in a the diversity of environments and suit many needs. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod.
        </p>
        <p>
          We hope you enjoy our products as much as we enjoy offering them to
          you. If you have any questions or comments, please don’t hesitate to
          contact us.We hope you enjoy our products as much as we enjoy.
        </p>
      </div>

      <div className="img-section container overflow-hidden mb-5">
        <div className="row g-1">
          <div className="col-4">
            <img src={img1} alt=" ... " />
          </div>
          <div className="col-4">
            <img src={img2} alt=" ... " />
          </div>
          <div className="col-4">
            <img src={img3} alt=" ... " />
          </div>
          <div className="col-4">
            <img src={img4} alt=" ... " />
          </div>
          <div className="col-4">
            <img src={img5} alt=" ... " />
          </div>
          <div className="col-4">
            <img src={img6} alt=" ... " />
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="text-center">Trusted by 3000+ Users</h2>
        <hr className="mx-auto" style={{ width: "25vh" }} />
        <p className="text-center px-5">
          This founding principle continues to motivate us today. We committed
          to working with their latest and also best designers from all over the
          world to create high-quality products that would be available to a
          wide audience Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
        <hr className="my-5" />
      </div>

      <div className="container">
        <h2 className="text-center">Meet Our Team</h2>
        <hr style={{ width: "15vh" }} className="mx-auto" />
        <p className="text-center mx-auto" style={{ width: "60%" }}>
          If you have any questions or comments, please don’t hesitate to
          contact us.We hope you enjoy our products as much as we enjoy. Lorem
          ipsum dolor sit amet, consectetur.
        </p>

        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <div className="d-flex flex-wrap justify-content-center p-4">
                <div>
                  <div
                    className="img-cicle"
                    style={{ backgroundImage: `url(${men1})` }}
                  ></div>
                  <label className="lh-lg fw-bold fs-5 mt-2">
                    Nemo Enimson
                  </label>
                  <p>(DESIGNER)</p>
                </div>
                <div>
                  <div
                    className="img-cicle"
                    style={{ backgroundImage: `url(${men2})` }}
                  ></div>
                  <label className="lh-lg fw-bold fs-5 mt-2">
                    Vilorano jeo
                  </label>
                  <p>(CEO)</p>
                </div>
                <div>
                  <div
                    className="img-cicle"
                    style={{ backgroundImage: `url(${women1})` }}
                  ></div>
                  <label className="lh-lg fw-bold fs-5 mt-2">
                    Reema Anderson
                  </label>
                  <p>(DEVELOPER)</p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <hr className="my-5" />
      </div>

      <div className="container mt-4">
        <h2 className="text-center">We Work With The Best Brand</h2>
        <hr style={{ width: "15vh" }} className="mx-auto" />
        <div className="d-flex justify-content-evenly flex-wrap my-5">
          <div>
            <img className="brand-logo" src={iconic} alt="iconic" />
          </div>
          <div>
            <img className="brand-logo" src={travel} alt="travel" />
          </div>
          <div>
            <img className="brand-logo" src={vintage} alt="vintage" />
          </div>
          <div>
            <img className="brand-logo" src={natural} alt="natural" />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
