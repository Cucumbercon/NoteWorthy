// App.js

import React, { useState } from 'react';
import Textarea from './Components/Textarea';
import Toolbar from './Components/Toolbar';
import Button from './Components/Button';
import './editor.css';
import Navbar from './Components/Navbar';


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

   <Navbar />
  /*
    <div>
      <Toolbar onUndo={handleUndo} onRedo={handleRedo} onFormatClick={handleFormatClick} />
      <Textarea value={content} onChange={handleChange} />
      <Button onClick={handleSave} label="Save" />
    </div>
    */

  );
}

export default App;
