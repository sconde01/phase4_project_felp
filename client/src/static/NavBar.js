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
      <li> {currentUser.username}</li>
      <li><Link to="#" onClick={handleLogoutClick}>Logout</Link></li>
      </>
    )
  }

  const NavBarLoggedOut = () => {
    return (
      <>
      <li><Link to="/signup">Signup</Link></li>
      <li> <Link to="/login">Login</Link></li>
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
