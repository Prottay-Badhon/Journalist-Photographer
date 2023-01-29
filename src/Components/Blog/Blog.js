import React from 'react'
import { Table } from 'react-bootstrap'
import "./Blog.css"
const Blog = () => {
  return (
    <div className='blog'>
       <Table striped className='table'>
      <thead>
        <tr>
          <th></th>
          <th>Authentication</th>
          <th>Authorization</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>In the authentication process, the identity of users are checked for providing the access to the system.</td>
          <td>While in authorization process, a the person’s or user’s authorities are checked for accessing the resources.</td>
        </tr>
        <tr>
          <td>2</td>
          <td>In the authentication process, users or persons are verified.</td>
          <td>While in this process, users or persons are validated.</td>
        </tr>
        <tr>
          <td>3</td>
          <td>It is done before the authorization process.</td>
          <td>While this process is done after the authentication process.</td>

        </tr>
        <tr>
          <td>4</td>
          <td>It needs usually the user’s login details.</td>
          <td>While it needs the user’s privilege or security levels.</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Generally, transmit information through an ID Token.</td>
          <td>Generally, transmit information through an Access Token.</td>

        </tr>
        
        <tr>
          <td>6</td>
          <td>Authentication determines whether the person is user or not.</td>
          <td>While it determines What permission does the user have?</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Blog
