import React from 'react';
import Button from './Button';
import './Toolbar.css';


function Toolbar(props) {
  function handleFormatClick(format) {
    // code to format the text
  }

  function handleFontChange(event) {
    //code to change the font
  }


  return (
    <div className="toolbar">
      <Button onClick={() => handleFormatClick('bold')} label="Bold" />
      <Button onClick={() => handleFormatClick('italic')} label="Italic" />
      <Button onClick={() => handleFormatClick('underline')} label="Underline" />
      <select onChange ={handleFontChange} defaultValue = "default">
      <option value = "default" disabled>
        <b>Font</b>
      </option>
      <option value = "Arial"> Arial</option>
      <option value = "Helvetica">Helvetica</option>
      <option value = "Times New Roman">Times New Roman</option>
      </select>
      <Button onClick={props.onUndo} label="Undo" />
      <Button onClick={props.onRedo} label="Redo" />
    </div>
  );
}

export default Toolbar;
