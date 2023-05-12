import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const NavBar = () => {
  const { loggedIn, logoutUser, currentUser } = useContext(UserContext)

  const handleLogoutClick = () => {
    fetch('/logout',
    { method: "DELETE"})
    logoutUser();
  }

  const NavBarLoggedIn = () => {
    return (
      <Navbar>
      <Container>
        <Nav className="me-auto">
          <Link to="/food_trucks/new">Add a Food Truck</Link>
          <Link to="/user/food_trucks">My Food Trucks</Link>
         </Nav>
        <Navbar.Toggle />
          <Navbar.Text className='signedin'>
            <b>Signed in as:</b> <Link to="/food_trucks/user-reviews">{currentUser.username}</Link>
          </Navbar.Text>
        <Nav >
          <Nav.Link href="#" onClick={handleLogoutClick}>Sign Out</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    )
  }

  const NavBarLoggedOut = () => {
    return (
      <>
      <p> <Link to="/login">Login</Link></p>
      <p><Link to="/signup">Signup</Link></p>
      </>
    )
  }

  return (
    // <header>
    //   <div>
    //     <Link to="/food_trucks">Home</Link>
    //   </div>
    //   <div>
    //     { loggedIn ? NavBarLoggedIn() : NavBarLoggedOut() }
    //   </div>
    // </header>
    <Navbar>
    <Container>
      <Navbar.Brand href="/food_trucks">FELP FOOD TRUCKS</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <div>
        { loggedIn ? NavBarLoggedIn() : NavBarLoggedOut() }
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
