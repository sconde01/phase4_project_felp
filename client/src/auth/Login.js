import React, {useState, useEffect, useContext} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ErrorsContext } from '../Context/ErrorsContext';
import { UserContext } from '../Context/UserContext';


export const Login = () => {
  const { setErrors } = useContext(ErrorsContext);
  const {loginUser, loggedIn} = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() =>{
    if(loggedIn) {
      navigate('/food_trucks')
    }
    return () => {
      setErrors([])
    }
  }, [loggedIn, navigate, setErrors])

 
  const handleSubmit = e => {
    e.preventDefault();

    fetch("/login" , {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then(r => r.json())
      .then(data => {
        if(data.errors) {
          setErrors(data.errors);
        } else {
          loginUser(data)
          setErrors([])
          navigate("/food_trucks")
        }
      })
  }

  return (
    <Form className="Login" onSubmit={ handleSubmit }>
    <h1>Log In</h1>

    <Form.Group className ="mb-3" controlId="formBasicEmail">
      <Form.Label>Username</Form.Label>
      <input
        type="text" 
        placeholder="Enter Username"
        id="username"
        value={ username }
        onChange={ e => setUsername(e.target.value) }
        required={ true }
         />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <input 
      type="password" 
      placeholder="Password"
      id="password"
      value={ password }
      onChange={ e => setPassword(e.target.value) }
      />
    </Form.Group>

    {/* {errors && <Alert variant="danger">{errors}</Alert>} */}

    <Button variant="primary" type="submit" value="Login">
      Sign In!
    </Button>
  </Form>  
  )
}
