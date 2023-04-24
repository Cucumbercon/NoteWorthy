import './Textarea.css';

function Textarea(props) {

  return (
    <div className="page">
      <div className="header">
      </div>
      <div className="textarea-container">
        <textarea
          className="textarea"
          value={props.text}
          onChange={props.onChange}
          placeholder="Untitled..."
        />
      </div>
    </div>
  );
}

export default Textarea;
