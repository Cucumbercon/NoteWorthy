import React, { useState, useContext } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import axios from 'axios';
import UserContext from '../context/UserContext';
import {useNavigate, Link} from 'react-router-dom';
import styles from './Login.module.css';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const setUserData = useContext(UserContext);
  
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const loginUser = {email, password};
      
      const loginRes = await axios.post("http://localhost:3000/api/users/login", loginUser);
      setUserData.setUserData({
        token: loginRes.token,
        user: loginRes.user,
      });
      
    } catch (err) {
      setLoading(false);
      err.response.data.msg && setError(err.response.data.msg);
    }
  }

  return (
    <Container>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={require("../images/logo.png")} alt="Logo" />
            <a className={styles.logo} href="/">NoteWorthy</a>
          </div>
          <ul className={styles.navlinks}>
            <li className={styles.li}>
              <a className={styles.a} href="/Signup">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.background}>
        <>
        <Card className={styles.cardcontainer}>
          <Card.Body className={styles.card}>
            <div className={styles.centeredimg}>
              <img src={require('../images/logo.png')} alt="Logo" />
            </div>
            <h1>Log In</h1>
            <br></br>
            {error && <Alert variant="danger">{error}</Alert>}
            <div className={styles.formcontainer}>
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email: </Form.Label>
                  <Form.Control className={styles.textinput} type="email" required onChange={e => setEmail(e.target.value)}
                  placeholder="Username"/>
                </Form.Group>
                <hr></hr>
                <Form.Group id="password">
                  <Form.Label>Password: </Form.Label>
                  <Form.Control className={styles.textinput} type="password" required onChange={e => setPassword(e.target.value)}
                  placeholder="Password"/>
                </Form.Group>
                <hr></hr>
                <Button disabled={loading} className={styles.submitbutton} type = "submit">
                  Log In
                </Button>
                <hr></hr>
                <div className={styles.formcontainer}>
                  Need an account? <Link to="/Signup">Sign Up</Link>
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
export default Login;