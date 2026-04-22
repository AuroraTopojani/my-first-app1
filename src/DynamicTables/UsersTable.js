import { useState } from "react";

const users = [
  { id: 1, name: "Alice", age: 20, email: "alice@gmail.com" },
  { id: 2, name: "Jack", age: 23, email: "jack@gmail.com" },
  { id: 3, name: "Bob", age: 29, email: "bob@gmail.com" },
  { id: 3, name: "Aurora", age: 25, email: "rora@gmail.com" },
];

export default function UsersTable() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div>
      <h2>SEARCH BY NAME</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
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
