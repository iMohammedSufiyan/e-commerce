import React from "react";
import "./sass/Footer.scss";

export default function Footer() {
  return (
    <>
      <footer className="footer p-5">
        <div className="row">
          <div className="col-lg-4 text-capitalize">
            <h5>contact us</h5>
            <hr style={{ width: "3rem" }} />
            <p>502 New Design Str, Melbourne, Australia</p>
            <p>1800 222 7560</p>
            <p>example@example.com</p>
          </div>
          <div className="col-lg-3 text-capitalize">
            <h5>information</h5>
            <hr style={{ width: "3rem" }} />
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Terms & Conditions</li>
              <li>Return & Exchange</li>
              <li>Shipping & Delivery</li>
            </ul>
          </div>
          <div className="col-lg-2 text-capitalize">
            <h5>our services</h5>
            <hr style={{ width: "3rem" }} />
            <ul className="list-unstyled">
              <li>Your Account</li>
              <li>Return Center</li>
              <li>Purchase</li>
              <li>App Download</li>
              <li>Latest News</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div className="col-lg-3 text-capitalize">
            <h5>get latest updates</h5>
            <hr style={{ width: "3rem" }} />
            <p>There are many variations of passages Lorem Ipsum available</p>
          </div>
        </div>
        <hr />
        <p className="text-center">Copyright © 2023 CoderPlace</p>
      </footer>
    </>
  );
}
