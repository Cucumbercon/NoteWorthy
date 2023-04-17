import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Signup.module.css'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [item, setItem] = useState({
    fullName: '',
    userName: '',
    password: '',
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
          fullName: '',
          userName: '',
          password: '',
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in Signup!');
      });
  };

  return (
    <div className={styles.Signup}>
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={"styles.col-md-8 m-auto"}>
          <br />
          <Link to='/'>Home</Link>
          <br></br>
          <Link to='/Login'>Login</Link>
        </div>
          <div class={styles.container}>
            <div class={styles.card}>
       <div class={styles.centeredimg}><img src={require("../images/logo.png")} alt="Logo"></img></div>
        <h1>Sign Up</h1>
        <div class = {styles.inputText}>
            <label for="email">Email:</label>
            <input class type="text" id="email" name="email"></input>
          </div>
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
            <input class = {styles.submit} type="submit" value="SIGN UP"></input>
            
          </div>
        </form>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
