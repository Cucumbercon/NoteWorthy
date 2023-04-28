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
    let newContent;
    const selectionStart = document.getElementById('textarea').selectionStart;
    const selectionEnd = document.getElementById('textarea').selectionEnd;
    const currentContent = props.content;

    switch (format) {
      case 'bold':
        newContent =
          currentContent.substring(0, selectionStart) +
          '<span style="font-weight: bold;">' +
          currentContent.substring(selectionStart, selectionEnd) +
          '</span>' +
          currentContent.substring(selectionEnd);
        break;
      case 'italic':
        newContent =
          currentContent.substring(0, selectionStart) +
          '<span style="font-style: italic;">' +
          currentContent.substring(selectionStart, selectionEnd) +
          '</span>' +
          currentContent.substring(selectionEnd);
        break;
      case 'underline':
        newContent =
          currentContent.substring(0, selectionStart) +
          '<span style="text-decoration: underline;">' +
          currentContent.substring(selectionStart, selectionEnd) +
          '</span>' +
          currentContent.substring(selectionEnd);
        break;
      default:
        newContent = currentContent;
    }

    props.onChange(newContent);
  }
    function handleFontChange(event) {
      const font = event.target.value;
      const textarea = document.getElementById('my-textarea');
      const startPos = textarea.selectionStart;
      const endPos = textarea.selectionEnd;
      const selectedText = textarea.value.substring(startPos, endPos);
    
    
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
