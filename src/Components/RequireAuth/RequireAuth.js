import React from 'react'
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequireAuth = ({children}) => {
  const [user,loading,error]=useAuthState(auth);
  const location = useLocation();
  if(loading){
    return   <Spinner animation="border" variant="info" />
}
  if(!user){
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
  }
  else
        return children;
}

export default RequireAuth
