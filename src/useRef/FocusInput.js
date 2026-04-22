import { useRef } from "react";
export default function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="write something" />
      <button onClick={handleClick}>FOCUS THIS INPUT </button>
    </div>
  );
}
