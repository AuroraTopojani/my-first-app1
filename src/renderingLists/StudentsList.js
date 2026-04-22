const students = ["Alice", "Alem", "Muhamed"];
export default function StudentsList() {
  return (
    <ul>
      {students.map((student, index) => (
        <li key={index}>{student}</li>
      ))}
    </ul>
  );
}
