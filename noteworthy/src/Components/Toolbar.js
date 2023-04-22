import React from 'react';
import Button from './Button';
import './Toolbar.css';
import { AiOutlineBold } from 'react-icons/ai';
import { AiOutlineItalic } from 'react-icons/ai';
import { AiOutlineUnderline } from 'react-icons/ai';
import { AiOutlineUndo } from 'react-icons/ai';
import { AiOutlineRedo } from 'react-icons/ai';

function Toolbar(props) {
  function handleFormatClick(format) {
    // code to format the text
  }

  function handleFontChange(event) {
    //code to change the font
  }

  
  return (
    <div className="toolbar">
      <Button onClick={() => handleFormatClick('bold')}><AiOutlineBold/></Button>
      <Button onClick={() => handleFormatClick('italic')}><AiOutlineItalic/></Button> 
      <Button onClick={() => handleFormatClick('underline')}><AiOutlineUnderline/></Button> 
      <select onChange ={handleFontChange} defaultValue = "default">
      <option value = "default" disabled>
        <b>Font</b>
      </option>
      <option value = "Arial"> Arial</option>
      <option value = "Helvetica">Helvetica</option>
      <option value = "Times New Roman">Times New Roman</option>
      </select>
      <Button onClick={props.onUndo}><AiOutlineUndo/></Button>
      <Button onClick={props.onRedo}><AiOutlineRedo/></Button>
    </div>
  );
}

export default Toolbar;
