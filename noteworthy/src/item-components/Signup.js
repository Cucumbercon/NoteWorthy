import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Signup.module.css';

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
        <div className={styles.cardcontainer}>
          <div className={styles.card}>
            <div className={styles.centeredimg}><img src={require("../images/logo.png")} alt="Logo"></img></div>
            <h1>Sign Up</h1>
            <div className={styles.formcontainer}>
              <form onSubmit={onSubmit}>
                <label htmlFor="fullname">Full Name:</label>
                <input
                  type="text" 
                  id="fullname" 
                  name="fullname" 
                  className={styles.textinput} 
                  value={item.fullname} 
                  onChange={onChange}
                />
                <label htmlFor="signupUsername">Username:</label>
                <input 
                  type="text" 
                  id="signupUsername" 
                  name="signupUsername" 
                  className={styles.textinput} 
                  value={item.signupUsername} 
                  onChange={onChange}
                />
                <label htmlFor="password">Password:</label>
                <input 
                  type="text" 
                  id="signupPassword" 
                  name="signupPassword" 
                  className={styles.textinput} 
                  value={item.signupPassword} 
                  onChange={onChange}
                />
                <Link to="/Login">
                  <input type="submit" value="SUBMIT" className={styles.submitbutton} />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
