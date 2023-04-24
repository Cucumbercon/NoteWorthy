// App.js
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React, { useState } from 'react';
import Home from './item-components/Home';
import Login from './item-components/Login';
import Signup from './item-components/Signup';
import Signedin from './item-components/Signedin';
import ErrorPage from './item-components/ErrorPage';
import TextEditor from './item-components/TextEditor';

function App() {
  return (
    
    <div>
      
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signedin' element={<Signedin />} />
          <Route path = '/TextEditor' element={<TextEditor />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;