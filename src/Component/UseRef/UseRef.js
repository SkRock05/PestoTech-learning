import { useEffect, useRef, useState } from "react";

function UseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}

export { UseRef };
