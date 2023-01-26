import React from "react";
import { Button, Card } from "react-bootstrap";
import "./Service.css";

const Service = (props) => {
  return (
    <div className="service" style={{backgroundImage: `url(${props.image})`}}>
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
