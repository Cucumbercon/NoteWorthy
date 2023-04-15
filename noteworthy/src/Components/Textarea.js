import React, { useState } from 'react';
import './Textarea.css';


function Textarea() {
  const [content, setContent] = useState('');

  function handleChange(event) {
    setContent(event.target.value);
  }

  return (
    <textarea
      value={content}
      onChange={handleChange}
      placeholder="Untitled..."
    />
  );
}

export default Textarea;
