import React from 'react'
import { FormGroup } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Checkout = () => {
  const handleSubmit=(event)=>{
    event.preventDefault();
    toast("Thanks for hiring me!");
    
  }
  return (
    <div className='my-5 py-5 checkout'>
            <div className="register">
          <div className="">
            <h2 className="text-center">Please checkout</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
              <input type="number" name="phone" id="" placeholder='contact number' required/>
            <textarea name="address" id="" className='my-4' rows="5" style={{width: "100%",outline:"0",border: "1"}} placeholder="Address" required></textarea>
              <input
               
                type="submit"
                name=""
                id="sub"
                className="btn btn-primary border-0"
                value="Click to Hire"
              />
            </form>
            
          </div>
        </div>
      <ToastContainer />
    </div>
  )
}

export default Checkout
