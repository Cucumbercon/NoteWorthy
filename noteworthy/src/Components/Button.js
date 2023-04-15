import React from 'react';
import '../editor.css';


function Button(props) {
  return (
    <button className = {props.className} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;
