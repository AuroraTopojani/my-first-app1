import { useState } from "react";

const users = [
  { id: 1, name: "Alice", age: 20, email: "alice@gmail.com" },
  { id: 2, name: "Jack", age: 23, email: "jack@gmail.com" },
  { id: 3, name: "Bob", age: 29, email: "bob@gmail.com" },
  { id: 3, name: "Aurora", age: 25, email: "rora@gmail.com" },
  { id: 3, name: "Rora", age: 25, email: "rora@gmail.com" },
];

export default function SortingTable() {
  const [sortOrder, setSortOrder] = useState("asc");
  const sortUsers = [...users].sort((a, b) => {
    if (sortOrder === "asc") return a.age - b.age;
    else return b.age - a.age;
  });
  return (
    <div>
      <h2>SORTING BY AGE</h2>
      <button onClick={() => setSortOrder(sortOrder === "asc" ? "dsc" : "asc")}>
        SORT AGE : {sortOrder}
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {sortUsers.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
