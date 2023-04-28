import React from "react";
import {Link} from 'react-router-dom';
import myImage from './logo.png'

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">NoteWorthy</a>

      <div>
      <img src={require('./logo.png')} alt="My Image" height ="50px" />
    </div>

      <ul>
        <li>
        <Link to="/">Logout</Link>
        </li>
        <li>
          <a href="/username">Username</a>
        </li>
      </ul>
    </nav>
  );
}
