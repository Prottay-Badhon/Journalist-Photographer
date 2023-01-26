import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const googleLoginHandler = ()=>{
        signInWithGoogle();
    }

    if(user){
        navigate("/");
    }
  return (
    <div>
        <p className='text-danger'>{error?.message}</p>
       <button onClick={googleLoginHandler}>login with google</button>
    </div>
  )
}

export default GoogleLogin
