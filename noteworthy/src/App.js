// App.js

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './item-components/Home';
import Login from './item-components/Login';
import Signup from './item-components/Signup';
import Signedin from './item-components/Signedin';
import ErrorPage from './item-components/ErrorPage';
import TextEditor from './item-components/TextEditor';
import './editor.css';
import './Components/Navbar.css'
import './Components/Textarea.css'
import axios from 'axios';
import UserContext from './context/UserContext';

const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token == null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:3000/api/users/tokenIsValid",
        null,
        {
          headers: {"x-auth-token": token} }
        );
        if (tokenResponse) {
          const userRes = await axios.get("http://localhost:3000/api/users", {
            headers: { "x-auth-token": token},
          });
          setUserData.setUserData({
            token,
            user: userRes.user,
          });
        }
    };
    checkLoggedIn();
  }, []);
  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signedin' element={<Signedin />} />
          <Route path = '/TextEditor' element={<TextEditor />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;