import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';

const Login = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [item, setItem] = useState({
    uName: '',
    psw: '',
  });

  const onChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8082/api/items', item)
      .then((res) => {
        setItem({
          uName: '',
          psw: '',
        });
        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in Login!');
      });
  };

  return (
    <div>
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
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <div className={styles.centeredimg}>
              <img src={require('../images/logo.png')} alt="Logo" />
            </div>
            <h1>Login</h1>
            <div className={styles.formcontainer}>
              <form onSubmit={onSubmit}>
                <label htmlFor="loginUsername">Username:</label>
                <input
                  type="text"
                  id="loginUsername"
                  name="loginUsername"
                  className={styles.textinput}
                  value={item.loginUsername}
                  onChange={onChange}
                />
                <label htmlFor="loginPassword">Password:</label>
                <input
                  type="text"
                  id="loginPassword"
                  name="loginPassword"
                  className={styles.textinput}
                  value={item.loginPassword}
                  onChange={onChange}
                />
                <Link to="/Signedin">
                  <input type="submit" value="LOGIN" className={styles.submitbutton} />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
