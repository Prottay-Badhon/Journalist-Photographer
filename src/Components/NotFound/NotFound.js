import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCat,faSadCry } from '@fortawesome/free-solid-svg-icons'
const NotFound = () => {
  return (
    <div className='d-flex justify-content-center flex-column align-items-center py-5 my-5'>
        <FontAwesomeIcon icon={faSadCry} style={{fontSize: "50px",color: "#d99600"}}></FontAwesomeIcon>
        <h2 className='text-danger mt-3'>Page not found !</h2>
    </div>
  )
}

export default NotFound
