import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Signedin.module.css';
import { useNavigate } from 'react-router-dom';

const Signedin = () => {
  return (
    <div>
      <nav class={styles.navbar}>
        <div class={styles.container}>
          <div class={styles.logo}>
            <img src={require("../images/logo.png")} alt="Logo" />
            <a class={styles.logo} href="/">NoteWorthy</a>
          </div>
          <ul class={styles.navlinks}>
            <li class={styles.li}><a class={styles.a} href="/">Logout</a></li>
          </ul>
        </div>
      </nav>
      <div class={styles.homepage}>
        <div class={styles.heading}>
          <h1>NoteWorthy</h1>
          <p>take note-taking to new heights</p>
          <div class={styles.notebuttoncontainer}>
            <Link to='/Texteditor'><input type="submit" value="NEW NOTE" class={styles.notebutton} /></Link>
          </div>
        </div>
        <img src={require('../images/signedin.png')} alt="Laptop" width="350" height="auto" />
      </div>
    </div>
  );
};

export default Signedin;
