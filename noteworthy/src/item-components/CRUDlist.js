import { useState, useCallback } from "react";
import axios from "axios";
import styles from './TextList.module.css'
import { Button, Card } from "react-bootstrap";
import Navbar from '../Components/Navbar';


function TextList() {
  const [jsonList, setJsonList] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const token = localStorage.getItem("auth-token");

  const handleDelete = useCallback(async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/documents/${id}`, {
        headers: { "x-auth-token": token },
      });
      setJsonList(jsonList.filter((doc) => doc._id !== id));
    } catch (error) {
      console.error(error);
    }
  }, [jsonList, token]);

  const handleEdit = useCallback(async (id) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/documents/${id}`,
        {
          title: editedTitle,
          description: editedDescription,
        },
        {
          headers: { "x-auth-token": token },
        }
      );
      setJsonList(
        jsonList.map((doc) => {
          if (doc._id === id) {
            return response.data;
          } else { 
            return doc;
          }
        })
      );
      setEditing(null);
    } catch (error) {
      console.error(error);
    }
  }, [editedTitle, editedDescription, jsonList, token]);

  return (
    <
              <div>
                <p className>Title: {json.title}</p>
                <p className>Description: {json.description}</p>
                <Button onClick={() => handleDelete(json._id)}className={styles.editButton}>Delete</Button>
                <Button onClick={() => {
                  setEditedTitle(json.title);
                  setEditedDescription(json.description);
                  setEditing(json._id);
                }}className={styles.editButton}>Edit</Button>
              </div>
            )}

export default TextList;