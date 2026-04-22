import { useEffect, useRef, useState } from "react";
export default function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  });
  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous {prevCount.current}</p>

      <button onClick={() => setCount(count + 1)}>ADD +</button>
    </div>
  );
}
