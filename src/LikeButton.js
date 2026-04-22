import { useState } from "react";

export default function LikeButton({ initialLiked }) {
  const [liked, setliked] = useState(initialLiked);

  return (
    <button onClick={() => setliked(!liked)}>
      {liked ? "Liked" : "Not Liked "}
    </button>
  );
}
