import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';

import { useNavigate } from 'react-router-dom';

const Login = (props) => {
/*
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
*/
  return (
    <div className={styles.Login}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={"styles.col-md-8 m-auto"}>
            <br />
            <Link to='/'>Home</Link>
            <br></br>
            <Link to='/Signup'>Sign Up</Link>
          </div>
          <div class={styles.container}>
            <div class={styles.card}>
       <div class={styles.centeredimg}><img src={require("../images/logo.png")} alt="Logo"></img></div>
        <h1>Login</h1>
        <form action="#" method="post">
          <div class = {styles.inputText}>
            <label for="username">Username:</label>
            <input class type="text" id="username" name="username"></input>
          </div>
          <div class = {styles.inputText}>
            <label for="password">Password:</label>
            <input type="text" id="password" name="password"></input>
          </div>
          <div>
            <input class = {styles.submit} type="submit" value="LOGIN"></input>
          </div>
        </form>
      </div>
    </div>
          
          </div>
        </div>
      </div>
  );
};

export default Login;