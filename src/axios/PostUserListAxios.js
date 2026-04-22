import { useState } from "react";
import axios from "axios";
export default function PostUserListAxios() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        title,
        description,
        userId: 1,
      })
      .then((response) => console.log("POST CREATED", response.data))
      .catch((error) => {
        console.error(" ERROR CREATING POST", error);
      });
  };

  return (
    <div>
      <h1>MY POST</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="TITLE"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          type="text"
          placeholder="DESCRIPTION"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>POSTOJE</button>
      </form>
    </div>
  );
}
