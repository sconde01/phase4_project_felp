import React, {useEffect, useState, useContext} from 'react'
import { Button, Form } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { ErrorsContext } from '../Context/ErrorsContext';
import { UserContext } from '../Context/UserContext'

export const Signup = () => {
  const { setErrors } = useContext(ErrorsContext);
  const { addUser, loginUser, loggedIn } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate("/food_trucks")
    }
    return () => {
      setErrors([])
    }
}, [loggedIn, navigate, setErrors])

  const handleSubmit = e => {
    e.preventDefault();

    fetch("/signup" , {
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
          addUser(data)
          loginUser(data)
          navigate("/food_trucks")
        }
      })
  }

  return (
    <Form className="Signup" onSubmit={ handleSubmit }>
      <h1>Sign Up</h1>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <input
          type="text" 
          placeholder="Enter Username"
          id="username"
          value={ username }
          onChange={ e => setUsername(e.target.value) }
          required={ true }
           />
        <Form.Text className="text-muted">
          <br/>
          We'll never share your information with anyone else.
        </Form.Text>
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

      <Button variant="primary" type="submit">
        Create Account!
      </Button>
    </Form>
  )
}
