import { async } from '@firebase/util';
import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ForgetPassword = () => {
    const email = useRef("");
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
      );
    const handleForgetPassword= async (event) =>{
      event.preventDefault();
        const inputEmail = email.current.value;
       await sendPasswordResetEmail(inputEmail);
       toast("email sent");

    }
    
  return (
    <div className='d-flex justify-content-center py-5'>
  
        {error? <p className='text-danger fw-bold'>{error.message}</p> : ""}
      <Form onSubmit={handleForgetPassword} className="w-75 my-5">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            ref={email}
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
            Send  password reset email
        </Button>
        </Form>
      <ToastContainer />
    </div>
  )
}

export default ForgetPassword
