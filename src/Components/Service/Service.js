import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  return (
    <div className="service" style={{backgroundImage: `url(${props.image})`}}>
      <div className="service-container">
        <div className="ps-2">
        <h3>DIAMOND HEART RING</h3>
        <p>$99</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam id natus laudantium.</p>
        </div>
        <Link to="/checkout">
        <button className="add-to-cart-btn">
        Add to cart
      </button>
      </Link>
      </div>
      
    </div>
  );
};

export default Service;
