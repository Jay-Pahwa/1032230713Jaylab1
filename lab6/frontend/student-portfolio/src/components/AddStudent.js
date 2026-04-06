import { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const addStudent = async () => {
    await axios.post("http://127.0.0.1:5000/student/add", {
      name,
      email,
      course
    });
    alert("Student Added");

    window.location.reload();
  };

  return (
  <div style={{
    border: "1px solid #ccc",
    padding: "20px",
    width: "300px",
    margin: "auto",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px #ccc"
  }}>
    <h2>Add Student</h2>

    <input placeholder="Name" onChange={(e) => setName(e.target.value)} /><br /><br />
    <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} /><br /><br />
    <input placeholder="Course" onChange={(e) => setCourse(e.target.value)} /><br /><br />

    <button onClick={addStudent}>Add Student</button>
  </div>
);  }

export default AddStudent;
