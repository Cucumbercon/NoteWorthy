import React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '../Components/Toolbar';
import Textarea from '../Components/Textarea';
import Button from '../Components/Button';
import Navbar from '../Components/Navbar';

function Editor() {
  function handleUndo() {
    // code to undo changes
  }

  function handleRedo() {
    // code to redo changes
  }

  function handleFormatClick(format) {
    // code to format the text
  }

  function handleChange(event) {
    // code to handle changes in the textarea
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
