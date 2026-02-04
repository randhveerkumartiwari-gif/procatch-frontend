import { useEffect, useState } from "react";

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://procatch-backend.onrender.com/api/courses")
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Procatch 🚀</h1>
      <h2>Available Courses</h2>

      {courses.length === 0 && <p>Loading courses...</p>}

      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.title}</li>
        ))}
      </ul>
    </div>
  );
}
