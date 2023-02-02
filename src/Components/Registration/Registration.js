import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Registration.css";
import Spinner from 'react-bootstrap/Spinner';
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

const Registration = () => {
  const [agree, setAgree] = useState(false);
  const [userError, setUserError] = useState("");
 
  const navigate = useNavigate();
  const [verifiedUser, loading1, emailError] = useAuthState(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (password !== confirmPassword) {
      setUserError("password not matched !");
    } else {
      
      createUserWithEmailAndPassword(email, password)
      .then(()=>{
        updateProfile({ displayName: name })
      })
      
      setUserError("");
      navigate("/");
    }
  };

  return (
    <div className="container">
      {loading ? (
       <Spinner animation="border" variant="info" />
      ) : (
        <div className="register">
          <div className="">
            <h2 className="text-center">Please Register</h2>
            <p className="text-danger">{userError}</p>
            <p className="text-danger">{error?.message}</p>
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
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
                required
              />
              <input type="checkbox" name="terms" id="terms" className="m-2" />
              <label
                htmlFor="terms"
                onClick={() => {
                  setAgree(!agree);
                }}
              >
                Accept terms and conditions
              </label>
              <input
                disabled={!agree}
                type="submit"
                name=""
                id="sub"
                className="btn btn-primary border-0"
                value="Register"
              />
            </form>
            <p>
              Already have an account?
              <span>
                <Link to="/login" className="text-decoration-none fw-bold">
                  Please Login
                </Link>
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Registration;
