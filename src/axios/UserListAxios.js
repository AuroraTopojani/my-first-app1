import axios from "axios";
import { useEffect, useState } from "react";
export default function UserListAxios() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUserList(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div>
      <ul>
        {userList.map((user) => (
          <div>
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.email}</li>
          </div>
        ))}
      </ul>
    </div>
  );
}
