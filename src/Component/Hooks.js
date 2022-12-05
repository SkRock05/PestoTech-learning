import React, { useState } from "react";

function Hooks(props) {
  const [count, setCount] = useState(65);
  const [asciiCode, setAsciiCode] = useState(count);
  return (
    <>
      <h1>{count}</h1>
      <h1>{String.fromCodePoint(asciiCode)}</h1>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1);
          setAsciiCode(asciiCode + 1);
        }}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => {
          setCount(count - 1);
          setAsciiCode(asciiCode - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
}

export { Hooks };
