import { useEffect, useState } from "react";

export default function TitleExample() {
  const [titleCount, setTitleCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${titleCount} times`;
  }, [titleCount]);

  return (
    <button
      onClick={() => {
        setTitleCount(titleCount + 1);
      }}
    >
      Click here
    </button>
  );
}
