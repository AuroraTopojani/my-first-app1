import { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("ERROR FETCHING DATA", error));
  }, []);
  console.log("POST LISTA");
  return (
    <div>
      {posts.map((post) => (
        <ul key={post.id}>
          <li>{post.title}</li>
          <li>{post.body}</li>
        </ul>
      ))}
    </div>
  );
}
