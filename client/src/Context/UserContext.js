import { createContext, useState, useEffect } from "react";

const UserContext = createContext ([]);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/show-current-user')
    .then(r => r.json())
    .then(data => {
      if(!data.errors) {
      loginUser(data)}
    })
  }, []); //[] = showing ALL users?
  
  useEffect(() => {
    if(loggedIn) {
      fetch('/users')
      .then (r => r.json())
      .then (data => {
        setUsers(data)
      })
    }
  }, [loggedIn])

  const loginUser = user => { 
    setCurrentUser(user);
    setLoggedIn(true)
  }

  const logoutUser = () => {
    setCurrentUser(null);
    setLoggedIn(false);
  }

  const addUser = user => {
    setUsers([...users, user]);
  }
  
  return <UserContext.Provider value={{ users, loggedIn, loginUser, logoutUser, currentUser, addUser }}>{ children }</UserContext.Provider>


}



export { UserContext, UserProvider };