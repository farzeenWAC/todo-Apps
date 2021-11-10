import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import { Form, Button } from "react-bootstrap";
import Footer from "./Footer";
import { Redirect } from "react-router";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showNetflix, setShowNetflix] = useState(false);
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const data = {
    emailId: "farzeenshareef@gmail.com",
    password: "12345",
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (data.emailId == email && data.password == password) {
      setShowNetflix(true);
    } else {
      setShowNetflix(false);
    }
  };
  return (
    <div>
      <NavbarComponent />
      <div className="signin-form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              onChange={emailChangeHandler}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={passwordChangeHandler}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submitHandler}>
            Submit
          </Button>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
