import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";
import GithubLogin from '../SocialLogin/GithubLogin/GithubLogin';
import GoogleLogin from '../SocialLogin/GoogleLogin/GoogleLogin';
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
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
if(user){
 navigate(from,{replace: true});
}
  
  return (
    <div className='container my-5 py-5' style={{width: "50%"}}>
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
          <div className="d-flex gap-5 justify-content-center">
          <GoogleLogin></GoogleLogin>
            <GithubLogin></GithubLogin>
          </div>
    </div>
  )
}

export default Login
