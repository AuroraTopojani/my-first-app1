import { useRef } from "react";
export default function CounterRef() {
  const count = useRef(0);
  const increase = () => {
    count.current = count.current + 1;
    console.log("count", count.current);
  };

  return (
    <div>
      <button onClick={increase}>INCREASE</button>
    </div>
  );
}
