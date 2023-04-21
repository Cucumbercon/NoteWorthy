import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Signup.module.css';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
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

        navigate('/');
      })
      .catch((err) => {
        console.log('Error in Signup!');
      });
  };

  return (
    <div>
            <nav class={styles.navbar}>
                <div class={styles.container}>
                    <div class={styles.logo}>
                        <img src={require("../images/logo.png")} alt="Logo"></img>
                        <a class={styles.logo} href="/">NoteWorthy</a>
                    </div>
                    <ul class={styles.navlinks}>
                        <li class = {styles.li}><a class = {styles.a} href="/Login">Login</a></li>
                    </ul>
                </div>
            </nav>
        <div class={styles.background}>
          <div class={styles.cardcontainer}>
            <div class={styles.card}>
              <div class={styles.centeredimg}><img src={require("../images/logo.png")} alt="Logo"></img></div>
              <h1>Sign Up</h1>
              <div class={styles.formcontainer}>
                <form action="#" method="post">
                  <label for="username">Username:</label>
                  <input type="text" id="username" name="username" class={styles.textinput}></input>
                  <label for="password">Password:</label>
                  <input type="text" id="password" name="password" class={styles.textinput}></input>
                  <label for="username">Email:</label>
                  <input type="text" id="email" name="email" class={styles.textinput}></input>
                  <input type="submit" value="SUBMIT" class={styles.submitbutton}></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;