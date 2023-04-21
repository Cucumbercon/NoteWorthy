import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';

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
            <img src={require("../images/logo.png")} alt="Logo"></img>
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
              <img src={require("../images/logo.png")} alt="Logo"></img>
            </div>
            <h1>Login</h1>
            <div className={styles.formcontainer}>
              <form action="#" method="post">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="uName"
                  className={styles.textinput}
                  onChange={onChange}
                  value={item.uName}
                />
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="psw"
                  className={styles.textinput}
                  onChange={onChange}
                  value={item.psw}
                />
                <input
                  type="submit"
                  value="LOGIN"
                  className={styles.submitbutton}
                  onClick={onSubmit}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
