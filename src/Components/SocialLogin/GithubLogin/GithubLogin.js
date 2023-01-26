import React from 'react'
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const GithubLogin = () => {
    const navigate = useNavigate();
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
    const hangleGithubLogin=()=>{
        signInWithGithub();
    }
    if(user){
        navigate("/");
    }
  return (
    <div>
       <p className='text-danger'>{error?.message}</p>
      <button onClick={hangleGithubLogin}>Login with Github</button>
    </div>
  )
}

export default GithubLogin
