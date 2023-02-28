import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import banner1 from "../images/Main-Banner-1.jpg";
import banner2 from "../images/Main-Banner-2.jpg";
import "./sass/Home.scss";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Access_Key = "hFvicZ4DHlM24Md-J7UiDjm0KqMB4Nhet0fOlQWy9ks";
const Secret_Key = "OnwOda8zbge77uiY-CR0VuchPLX4_2qwF7Ug7xkQzuk";

function Card(props) {
  const [imag, setImag] = useState("");

  useEffect(() => {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${props.category}&client_id=${Access_Key}`;

    const fetchImage = async () => {
      try {
        const response = await fetch(url);
        const image = await response.json();
        setImag(image.results[4].urls.small);
      } catch (error) {
        console.log("error : " + error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={imag} className="card-img-top" alt={props.category} />
      <div className="card-body">
        <Link to={"/" + props.to} style={{ textDecoration: "none" }}>
          <h5 className="card-title text-capitalize">{props.category}</h5>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const url = "https://fakestoreapi.com/products/categories";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        setCategoryList(await response.json());
      } catch (error) {
        console.log("error : ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="banner-1 text-light"
              style={{
                height: "80vh",
                backgroundImage: `url(${banner1})`,
                backgroundPosition: "center",
              }}
            >
              <div className="row h-100">
                <div className="col-2"></div>
                <div className="col my-auto">
                  <h2>Top Selling</h2>
                  <h1>By Brand Shirts For Mens</h1>
                  <p>Up To 60% Off Best Styles At $299.00</p>
                </div>
                <div className="col"></div>
                <div className="col"></div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div
              className="banner-2"
              style={{
                height: "80vh",
                backgroundImage: `url(${banner2})`,
                backgroundPosition: "center",
              }}
            >
              <div className="row h-100">
                <div className="col-2"></div>
                <div className="col my-auto">
                  <h2>Today Deals</h2>
                  <h1>Women's Designer Clothe Deal</h1>
                  <p>Up To 60% Off Best Styles At $299.00</p>
                </div>
                <div className="col"></div>
                <div className="col"></div>
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

      <div className="container my-5">
        <h2 className="text-center">Shop By Category</h2>
        <hr
          style={{ width: "15vh", border: "1px solid black", opacity: "0.7" }}
          className="mx-auto"
        />

        <Carousel
          id="react-carousel"
          responsive={responsive}
          className="gd-carousel py-5"
          itemClass="carousel"
          partialVisible={false}
        >
          {categoryList.map((category, idx) => {
            return <Card key={idx} category={category} to={category} />;
          })}
        </Carousel>
      </div>
      <Footer />
    </>
  );
}
