import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import "../GoogleLogin/GoogleLogin.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const googleLoginHandler = ()=>{
        signInWithGoogle();
    }
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from,{replace: true});
    }
  return (
    <div>
        <p className='text-danger'>{error?.message}</p>
       <button onClick={googleLoginHandler} className="btn-google-login"><FontAwesomeIcon icon={faGoogle} className="fs-2"></FontAwesomeIcon><span className='ms-2'>login with google</span></button>
    </div>
  )
}

export default GoogleLogin
