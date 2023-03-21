import { createContext, useState, useEffect } from "react";

const UserContext = createContext ([]);

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([])

  useEffect (() => {
    fetch('/users')
      .then(r => r.json())
      .then(data => 
        { 
        setUsers(data)
      })
  }, [])

  const addUser = user => {
    setUsers([...users, user]);
  }
  
  return <UserContext.Provider value={{ users, addUser }}>{ children }</UserContext.Provider>


}



export { UserContext, UserProvider };