import { use, useEffect, useState } from "react";
export default function CounterEffect() {
  const [count, setCount] = useState(0); //1
  useEffect(() => {
    console.log("COUNT CHANGED", count); //funksioni qe e thirim
  }, [count]); //kur me thir funksionin

  //   useEffect(() => {
  //     console.log("COMPONENT MOUNTED");
  //   }, []);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
