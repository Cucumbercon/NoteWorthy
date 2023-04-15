// App.js

import React, { useState } from 'react';
import Textarea from './Components/Textarea';
import Toolbar from './Components/Toolbar';
import Button from './Components/Button';
import './editor.css';
import Navbar from './Components/Navbar';
import './Components/Navbar.css'
import './Components/Textarea.css'
import './Components/Toolbar.css'

function App() {
  const [content, setContent] = useState('');

  function handleUndo() {
    // code to undo the last action
  }

  function handleRedo() {
    // code to redo the last action
  }

  function handleSave() {
    // code to save the content
  }

  function handleFormatClick(format) {
    // code to format the text
  }

  function handleChange(event) {
    setContent(event.target.value);
  }

  return (
    
    <div><Navbar />
      <div className='Toolbar'><Toolbar onUndo={handleUndo} onRedo={handleRedo} onFormatClick={handleFormatClick}/></div>
      <div className = 'Textarea'><Textarea value={content} onChange={handleChange} /></div>
      <Button onClick={handleSave} label="Save" />
    </div>
    

  );
}

export default App;
