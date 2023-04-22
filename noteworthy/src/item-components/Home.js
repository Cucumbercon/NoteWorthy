import React from 'react';
import styles from './Home.module.css';

const Home = () => {
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
                        <li className={styles.li}><a className={styles.a} href="/Signup">Sign Up</a></li>
                    </ul>
                </div>
            </nav>
            <div className={styles.homepage}>
                <div className={styles.heading}>
                    <h1>NoteWorthy</h1>
                    <p>take note-taking to new heights</p>
                    {/*<form>
                    <input type="email" name="email" placeholder="Enter your email"></input>
                    <button type="submit" className={styles.signupbutton}>SIGN UP</button>
                    </form>
                    */}
                </div>
                <img src={require('../images/mainpic.png')} alt="Laptop" width="350" height="auto"></img>
            </div>
        </div>
    )
}

export default Home;
