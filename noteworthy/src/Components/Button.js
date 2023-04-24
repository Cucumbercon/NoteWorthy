import React from 'react';


function Button(props) {
  return (
    <button className = {props.className} onClick={props.onClick}>
      {props.children}
      {props.label}
    </button>
  );
}

export default Button;
