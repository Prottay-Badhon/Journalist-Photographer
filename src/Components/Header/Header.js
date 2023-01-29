import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../firebase.init';

const Header = () => {
  const [user, loading1, error1] = useAuthState(auth);
  const [signOut, loading2, error2] = useSignOut(auth);
  const handleLogout = ()=>{
   signOut(auth);
  }
  return (
    <div>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link to="/" as={Link}>Home</Nav.Link>
            
            <Nav.Link to="/blog" as={Link}>Blog</Nav.Link>
            <Nav.Link to="/about" as={Link}>About</Nav.Link>


            {
              !user? <Nav.Link to="/registration" as={Link}>Registration</Nav.Link> : ""
            }
                
            {user?   <button className='btn btn-info'>{user.displayName || user.email}</button>: ""}
             {
              user?.displayName|| user?.email ?<Nav.Link as={Link}  onClick={handleLogout}>
              Logout
            </Nav.Link>
              :<Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            }
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
