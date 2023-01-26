import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./Service.css"
import banner1 from "../../images/Banner/banner1.jpg"
const Service = () => {
  return (
    <div className='service'>
       <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={banner1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Service
