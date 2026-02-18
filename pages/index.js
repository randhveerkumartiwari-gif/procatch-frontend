import { useEffect, useState } from "react";

export default function Home() {
  const [courses, setCourses] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://procatch-backend.onrender.com/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data));

    fetch("https://procatch-backend.onrender.com/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Procatch 🚀</h1>

      {/* COURSES */}
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>

      <hr style={{ margin: "40px 0" }} />

      {/* PROJECTS */}
      <h2>Live Projects</h2>

      {projects.map(project => (
        <div key={project.id} style={{
          border: "1px solid #ddd",
          padding: "20px",
          marginBottom: "15px",
          borderRadius: "6px"
        }}>
          <h3>{project.title}</h3>
          <p><strong>Budget:</strong> {project.budget}</p>
          <p><strong>Skills:</strong> {project.skills.join(", ")}</p>

          <button style={{
            padding: "8px 12px",
            background: "#4f46e5",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}>
            Apply
          </button>
        </div>
      ))}
    </div>
  );
}
