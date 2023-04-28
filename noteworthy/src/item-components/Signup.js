import React, { useState,useContext } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import {Form, Button, Card, Alert, Container} from "react-bootstrap";

import axios from 'axios';
import styles from './Signup.module.css';
import UserContext from "../context/UserContext";

function Signup() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [username, setUsername] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const  setUserData = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const newUser = {email, password, confirmPassword, username};
      await axios.post("http://localhost:3000/api/users/signup", newUser);
      const loginRes = await axios.post("http://localhost:3000/api/users/login", {
        email,
        password,
      });
      setUserData.setUserData({
        token: loginRes.token,
        user: loginRes.user,
      });
      
      localStorage.setItem("auth-token", loginRes.token);
      navigate('/Signedin');
    } catch (err) {
      setLoading(false);
      err.response.msg && setError(err.response.msg);
    }
  }

  return (
     <Container>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={require("../images/logo.png")} alt="Logo"></img>
            <a className={styles.logo} href="/">NoteWorthy</a>
          </div>
          <ul className={styles.navlinks}>
            <li className={styles.li}><a className={styles.a} href="/Login">Login</a></li>
          </ul>
        </div>
      </nav>
      <div className={styles.background}>
        <>
          <Card className={styles.cardcontainer}>
            <Card.Body className={styles.card}>
              <div className={styles.centeredimg}>
                <img src={require("../images/logo.png")} alt="Logo"></img>
              </div>
              <h1>Sign Up</h1>
              {error && <Alert variant="danger">{error}</Alert>}
              <div className={styles.formcontainer}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="username" className="mt-3">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control 
                      className={styles.textinput}
                      type="name"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"/>
                  </Form.Group>
                  <hr></hr>
                  <Form.Group id="email" className="mt-3">
                    <Form.Label>Email: </Form.Label>
                    <Form.Control
                      className={styles.textinput}
                      type="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"/>
                  </Form.Group>
                  <hr></hr>
                  <Form.Group id="password">
                    <Form.Label>Password: </Form.Label>
                    <Form.Control
                      className={styles.textinput}
                      type="password"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"/>
                  </Form.Group>
                  <hr></hr>
                  <Form.Group id="confirmPassword">
                    <Form.Label>Confirm Password: </Form.Label>
                    <Form.Control
                      className={styles.textinput}
                      type="password"
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm password"/>
                  </Form.Group>
                  <hr></hr>
                  <Button disabled={loading} className={styles.submitbutton} type="submit">
                    Sign Up
                  </Button>
                  <hr></hr>
                  <div className={styles.formcontainer}>
                    Have an account? <Link to="/Login">Login</Link>
                  </div>
                </Form>
              </div>
            </Card.Body>
            
          </Card>
          
        </>
      </div>
     </Container>
  );
}

export default Signup;