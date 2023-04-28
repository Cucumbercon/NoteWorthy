import React, { useState } from 'react';
import './Textarea.css';

function Textarea() {
  const [content, setContent] = useState('');

  function handleChange(event) {
    setContent(event.target.value);
  }

  return (
    <div className="page">
      <div className="header">
      </div>
      <div className="textarea-container">
        <textarea
          className="textarea"
          value={content}
          onChange={handleChange}
          placeholder="Untitled..."
        />
      </div>
    </div>
  );
}

export default Textarea;
