import { useMemo, useState } from "react";
import "./CounterMemo.css";
export default function CounterMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 20000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <button onClick={incrementOne} style={{ backgroundColor: "red" }}>
        COUNTER ONE {counterOne}
      </button>
      <span>{isEven ? "EVEN" : "ODD"}</span>
      <br />
      <button onClick={incrementTwo}>COUNTER TWO {counterTwo}</button>
      <div className="box">HELLO</div>
    </div>
  );
}
