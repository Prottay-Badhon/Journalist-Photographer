import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Service.css";
import banner1 from "../../images/Banner/banner1.jpg";
import newspapper from "../../images/Banner/newspaper.jpg"
const Service = () => {
  return (
    <div className="service" style={{backgroundImage: `url(${newspapper})`}}>
      <div className="service-container">
        <div className="ps-2">
        <h3>DIAMOND HEART RING</h3>
        <p>$99</p>
        </div>
        <button className="add-to-cart-btn">
        Add to cart
      </button>
      </div>
      
    </div>
  );
};

export default Service;
