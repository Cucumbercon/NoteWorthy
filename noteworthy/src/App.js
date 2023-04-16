// App.js

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './item-components/Home';
import Login from './item-components/Login';
import Signup from './item-components/Signup';
import ErrorPage from './item-components/ErrorPage';
import Textarea from './Components/Textarea';
import Toolbar from './Components/Toolbar';
import Button from './Components/Button';
import Texteditor from './item-components/Texteditor'
import './editor.css';
import Navbar from './Components/Navbar';
import './Components/Navbar.css'
import './Components/Textarea.css'

function App() {
  return (
    
    <div>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path = '/Texteditor' element={<Texteditor />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;