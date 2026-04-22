const students = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Alem", age: 22 },
  { id: 3, name: "Muhamed", age: 13 },
];
export default function StudentListID() {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          {student.name} {student.age}
        </li>
      ))}
    </ul>
  );
}
