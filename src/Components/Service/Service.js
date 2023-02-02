import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Service.css";
const Service = (props) => {
  const {id,name,price,description,image}=props.service;
  return (
    <div className="service" style={{backgroundImage: `url(${image})`}}>
      <div className="service-container">
        <div className="ps-2">
        <h3>{name}</h3>
        <p>${price}</p>
       
        <p>{description}</p>
        </div>
        <Link to={`/checkout/${id}`}>
        <button className="add-to-cart-btn">
        Add to cart
      </button>
      </Link>
      </div>
      
    </div>
  );
};

export default Service;
