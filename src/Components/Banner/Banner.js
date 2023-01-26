import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../images/Banner/banner1.jpg";
import city from "../../images/Banner/city.jpg";
import village from "../../images/Banner/village.jpg";
import newspaper from "../../images/Banner/newspaper.jpg";
import "../Banner/Banner.css";
const Banner = () => {
  return (
    <div className="my-carousel">
      
      <Carousel fade>
      <Carousel.Item>
      <div className="my-banner">
        <div className="w-50"></div>
        <div className="photographer-container">
          <p>2023</p>
          <h1 className="p-0 m-0">John Smith</h1>
          <button className="btn-photographer">Journalism Photographer</button>
        </div>
      </div>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={city}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={newspaper}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Banner;
