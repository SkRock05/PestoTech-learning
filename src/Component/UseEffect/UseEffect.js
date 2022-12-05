import React, { useEffect, useState } from "react";

function UseEffect() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handler = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handler);

    return function cleanUp() {
      window.removeEventListener("resize", handler);
    };
  });
  return (
    <>
      <h1>Height : {height}</h1>
      <h1>Width : {width}</h1>
    </>
  );
}

function UseEffectExample() {
  const [text, setText] = useState("a");
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${text} - ${count}`;
  }, [count]);

  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>

      <h1>
        {text} - {count}
      </h1>
    </>
  );
}

export { UseEffect, UseEffectExample };
