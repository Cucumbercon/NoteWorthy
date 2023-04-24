import React from 'react';
import Button from './Button';
import './Toolbar.css';
import { AiOutlineBold } from 'react-icons/ai';
import { AiOutlineItalic } from 'react-icons/ai';
import { AiOutlineUnderline } from 'react-icons/ai';

function Toolbar(props) {
  function handleFormatClick(format) {
    const textarea = document.getElementById('myTextarea');
    if (textarea) {
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textarea.value.substring(start, end);
      const formattedText = `<${format}>${selectedText}</${format}>`;
      const newText = textarea.value.substring(0, start) + formattedText + textarea.value.substring(end);
      textarea.value = newText;
      props.onChange(newText);
    }
  }
  

  function handleFontChange(event) {
    const font = event.target.value;
    const newContent = '<span style="font-family: ' + font + ';">' + props.content + '</span>';
    props.onChange(newContent);
  }

  return (
    <div className="toolbar">
      <Button onClick={() => handleFormatClick('bold')}>
        <AiOutlineBold />
      </Button>
      <Button onClick={() => handleFormatClick('italic')}>
        <AiOutlineItalic />
      </Button>
      <Button onClick={() => handleFormatClick('underline')}>
        <AiOutlineUnderline />
      </Button>
      <select onChange={handleFontChange} defaultValue="default">
        <option value="default" disabled>
          <b>Font</b>
        </option>
        <option value="Arial">Arial</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Times New Roman">Times New Roman</option>
      </select>
    </div>
  );
}

export default Toolbar;
