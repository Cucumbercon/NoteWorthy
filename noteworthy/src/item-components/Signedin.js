import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Signedin.module.css';
import { useNavigate } from 'react-router-dom';

const Signedin = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src={require("../images/logo.png")} alt="Logo" />
            <a className={styles.logo} href="/">NoteWorthy</a>
          </div>
          <ul className={styles.navlinks}>
            <li className={styles.li}><a className={styles.a} href="/">Logout</a></li>
          </ul>
        </div>
      </nav>
      <div className={styles.homepage}>
        <div className={styles.heading}>
          <h1>NoteWorthy</h1>
          <p>take note-taking to new heights</p>
          <div className={styles.notebuttoncontainer}>
            <Link to='/TextEditor'><input type="submit" value="NEW NOTE" className={styles.notebutton} /></Link>
          </div>
        </div>
        <img src={require('../images/signedin.png')} alt="Laptop" width="350" height="auto" />
      </div>
    </div>
  );
};

export default Signedin;
