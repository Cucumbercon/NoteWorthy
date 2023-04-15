import React from 'react';
import Button from './Button';
import './Toolbar.css';



function Toolbar(props) {
  function handleFormatClick(format) {
    // code to format the text
  }

  return (
    <div>
      <Button onClick={() => handleFormatClick('bold')} label="Bold" />
      <Button onClick={() => handleFormatClick('italic')} label="Italic" />
      <Button onClick={() => handleFormatClick('underline')} label="Underline" />
      <Button onClick={props.onUndo} label="Undo" />
      <Button onClick={props.onRedo} label="Redo" />
    </div>
  );
}

export default Toolbar;
