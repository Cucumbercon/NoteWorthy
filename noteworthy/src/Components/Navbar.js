import React from "react";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">NoteWorthy</a>

      <div>
      <img src={require('./logo.png')} alt="My Image" height ="50px" />
    </div>

      <ul>
        <li>
          <a href="/logout">Logout</a>
        </li>
        <li>
          <a href="/username">Username</a>
        </li>
      </ul>
    </nav>
  );
}
