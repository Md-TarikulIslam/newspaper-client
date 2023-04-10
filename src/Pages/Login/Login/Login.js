import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLoginSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    
        console.log( email, password);

        signIn(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset()
            navigate('/')
          })
          .catch((error) => console.error("sign in error", error));
    }
  return (
    <Form onSubmit={handleLoginSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
      <Form.Text className="text-danger">
        {/* We'll never share your email with anyone else. */}
      </Form.Text>
    </Form>
  );
};

export default Login;
