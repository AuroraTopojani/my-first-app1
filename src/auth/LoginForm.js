import axios from "axios";
import { useEffect, useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        console.log("TOKEN RECIEVED", token);
        localStorage.setItem("authToken", token);
      })
      .catch((error) => {
        console.error("LOGIN FAILED TRY AGAIN");
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    axios
      .get("https://jsonplaceholder.typicode.com/post", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => console.log("POST ", response.data))
      .catch((error) => console.error("UNATHORIZED", error));
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>LOGIN</button>
      </form>
    </div>
  );
}
