import React from 'react'
import Service from '../Service/Service'
import "./Services.css"
const Services = () => {
  return (
    <div className='services'>
        <div className="services-info">
            <h1>Shop</h1>
            <h4>LIMITED EDITION MERCH AVAILABLE</h4>
            <p>The copy warned the Little Blind Text, that where it came from it would have been rewritten.</p>
            <button className='btn btn-outline-light'>View shop</button>
        </div>
        <div className="services-container">
        <Service></Service>
        <Service></Service>
        <Service></Service>
        <Service></Service>
        

        </div>
    </div>
  )
}

export default Services
