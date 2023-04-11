import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

export const NavBar = () => {
  const { loggedIn, logoutUser, currentUser } = useContext(UserContext)

  const handleLogoutClick = () => {
    fetch('/logout',
    { method: "DELETE"})
    logoutUser();
  }

  const NavBarLoggedIn = () => {
    return (
      <>
      <h2> Hi there, {currentUser.username} !</h2>
      <p> <Link to="/food_trucks/new">Add a Food Truck</Link></p>
      <p> <Link to="/food_trucks/user-reviews">See/Edit Reviews</Link></p>
      <p><Link to="#" onClick={handleLogoutClick}>Logout</Link></p>
      </>
    )
  }

  const NavBarLoggedOut = () => {
    return (
      <>
      <p><Link to="/signup">Signup</Link></p>
      <p> <Link to="/login">Login</Link></p>
      </>
    )
  }

  return (
    <header>
      <div>
        <Link to="/food_trucks">Home</Link>
      </div>
      <div>
        { loggedIn ? NavBarLoggedIn() : NavBarLoggedOut() }
      </div>
    </header>
  )
}
