import React from 'react';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div>
            <nav class={styles.navbar}>
                <div class={styles.container}>
                    <div class={styles.logo}>
                        <img src={require("../images/logo.png")} alt="Logo"></img>
                        <a class={styles.logo} href="/">NoteWorthy</a>
                    </div>
                <ul class={'styles.nav-links'}>
                    <li class = {styles.li}><a class = {styles.a} href="/Login">Login</a></li>
                    <li class = {styles.li}><a class = {styles.a} href="/Signup">Sign Up</a></li>
                </ul>
                </div>
            </nav>
            <div class={styles.homepage}>
                <div class={styles.heading}>
                    <h1>NoteWorthy</h1>
                    <p>take note-taking to new heights</p>
                    <form>
                    <input type="email" name="email" placeholder="Enter your email"></input>
                    <button type="submit">SIGN UP</button>
                    </form>
                </div>
                <img src={require('../images/mainpic.png')} alt="Laptop" width="350" height="auto"></img>
            </div>
        </div>
    )
}
export default Home;