import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <h3>Home Page</h3>
            <h2>
                <Link to='/login'>Login</Link>
                <br></br>
                <Link to='/signup'>Sign Up</Link>
            </h2>
        </div>
    )
}
export default Home;