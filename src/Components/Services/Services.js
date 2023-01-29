import React, { useEffect, useState } from 'react'
import Service from '../Service/Service'
import banner1 from "../../images/Banner/banner1.jpg";
import newspapper from "../../images/Banner/newspaper.jpg"
import city from "../../images/Banner/city.jpg";
import village from "../../images/Banner/village.jpg"
import "./Services.css"
import { Link } from 'react-router-dom';
const Services = () => {
  const [showedServices,setShowedServices]=useState(4);
  const [servicesData, setServices] = useState([]);
  const [visible,setVisible]=useState(true);
  const showMore=()=>{
    setShowedServices(servicesData.length);
    setVisible(false);
  }
  useEffect(() => {
    fetch("servicesData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    
    <div className='services'>
        <div className="services-info">
            <h1>Our Services</h1>
            <h4 className='text-uppercase'>We explores the visual story of an event with the help of photographs</h4>
            <p> </p>
            <button className='btn btn-outline-light'>View shop</button>
        </div>
                <div className="services-container">
                  {
                    servicesData.map((service,index)=> (index<showedServices)? <Service service={service} key={service.id}></Service> : "")
                  }
                    
                  {
                (servicesData.length>4) ? <button className='btn btn-success' 
                onClick={showMore} style={visible?{ display: "block"}:{display: "none"}}>Show more</button> : ""
                  }
              </div>
                 
        
    </div>
    

  )
}

export default Services
