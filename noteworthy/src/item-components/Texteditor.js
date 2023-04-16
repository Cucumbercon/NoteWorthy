
import React, { useState } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Toolbar from '../Components/Toolbar';
import Textarea from '../Components/Textarea';
import Button from '../Components/Button';
import Navbar from '../Components/Navbar';


function Editor() {

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
    <><Navbar />
    <div className="Texteditor">
          <Toolbar
              onUndo={handleUndo}
              onRedo={handleRedo}
              onFormatClick={handleFormatClick} />
          <Textarea onChange={handleChange} />
          <Button label="Save" />
      </div></>
  );
  }

export default Editor;
