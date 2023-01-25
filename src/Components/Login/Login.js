import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";
const Login = () => {
  const email = useRef("");
  const password = useRef("");
  const navigate = useNavigate();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const handleSubmit=(event)=>{
    event.preventDefault();
    const inputEmail = email.current.value;
    const inputPassword = password.current.value;
    signInWithEmailAndPassword(inputEmail,inputPassword);
    console.log(inputEmail,inputPassword);
  }
if(user){
 navigate("/");
}
  
  return (
    <div className='container my-5' style={{width: "50%"}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            ref={email}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={password}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {error ? <p className="text-danger">{error.message}</p> : ""}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <p>
             Not registered yet?
              <span>
                <Link to="/registration" className="text-decoration-none fw-bold">
                  Please Register
                </Link>
              </span>
            </p>
    </div>
  )
}

export default Login
