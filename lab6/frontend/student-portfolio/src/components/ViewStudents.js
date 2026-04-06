import { useEffect, useState } from "react";
import axios from "axios";

function ViewStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/student/view")
      .then((res) => {
        setStudents(res.data);
      });
  }, []);

  return (
  <div style={{ marginTop: "30px" }}>
    <h2>Student List</h2>

    {students.map((s) => (
      <div key={s._id} style={{
        border: "1px solid #ddd",
        margin: "10px auto",
        padding: "10px",
        width: "300px",
        borderRadius: "8px"
      }}>
        <p><b>Name:</b> {s.name}</p>
        <p><b>Email:</b> {s.email}</p>
        <p><b>Course:</b> {s.course}</p>
      </div>
    ))}
  </div>
  );

}

export default ViewStudents;