import React from 'react'
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./GithubLogin.css"

const GithubLogin = () => {
    const navigate = useNavigate();
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
    const hangleGithubLogin=()=>{
        signInWithGithub();
    }
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from,{replace: true});
    }
  return (
    <div>
       <p className='text-danger'>{error?.message}</p>
      <button onClick={hangleGithubLogin} className="btn-github-login"> <FontAwesomeIcon icon={faGithub} className="fs-2"></FontAwesomeIcon><span className='ms-2'>Login with Github</span></button>
    </div>
  )
}

export default GithubLogin
