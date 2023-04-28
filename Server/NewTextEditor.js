import { useState, useCallback } from "react"
import "quill/dist/quill.snow.css"
import './TextEditor.css'
import Navbar from '../Components/Navbar';
import Button from '../Components/Button';
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

export default function TextEdit() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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

  async function handleSubmit() {
    const token = localStorage.getItem("auth-token");
    const response = await axios.post("http://localhost:3000/api/documents", {
      title: title,
      description: description
    }, {
      headers: {
        "x-auth-token": token
      }
    })
    navigate('/Signedin');
  }

  return (
    <>
      <Navbar/>
      <div className="container">
      <div className="headerContainer">
        <div className="titleBox"><input type="text" value={title} onChange={handleTitleChange} placeholder="Title" /></div>
        <Button onClick={handleSubmit} className={"noteButton"}>SAVE</Button>
      </div>
        <div className="descriptionBox">
          <textarea value={description} onChange={handleDescriptionChange} placeholder="Description" />
        </div>
      </div>
    </>
  )
}