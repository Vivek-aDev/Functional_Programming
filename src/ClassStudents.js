import { students } from "./App";

export function ClassStudents() {
  return (
    <div>
      <h1>Class Students</h1>
      <ol>
        {students.map((student) => (
          <li key={student.id}>
            Name: <span style={{ color: "skyblue" }}>{student.name}, </span>
            Grade: {student.grade}, Attendance: {student.attendance}
          </li>
        ))}
      </ol>
    </div>
  );
}
