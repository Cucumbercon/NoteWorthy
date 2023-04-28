import { useState, useCallback } from "react"
import Quill from "quill"
import "quill/dist/quill.snow.css"
import './TextEditor.css'
import Navbar from '../Components/Navbar';

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false]}],
  [{ font: []}],
  [{list: "ordered"}, {list: "bullet"}],
  ["bold", "italic", "underline"],
  [{ color: [] }, {background: [] }],
  [{ script: "sub"}, { script: "super"}],
  [{ align: []}],
  ["image",],
  ["clean"],
]

export default function TextEdit() {
  const [title, setTitle] = useState("");
  
  const handleTitleChange = useCallback((event) => {
    setTitle(event.target.value);
  }, []);

  const wrapperRef = useCallback(wrapper => {
    if (wrapper == null) return

    wrapper.innerHTML = "";
    const editor = document.createElement("div");
    wrapper.append(editor);
    const quill = new Quill(editor, {
      theme: "snow",
      modules: {
        toolbar: TOOLBAR_OPTIONS
      },
      data: { title }
    });
  }, [title])

  return (
    <>
      <Navbar />
      <div className="container">
        <input type="text" value={title} onChange={handleTitleChange} placeholder="Title" />
        <div ref={wrapperRef} />
      </div>
    </>
  )
}
