import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
 

  return (
    <div>
      <Banner></Banner>
      <Services></Services>
    </div>
  )
}

export default Home
