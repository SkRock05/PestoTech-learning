import { useEffect, useState } from "react";

function useMouseMove() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handler = (event) => {
      const { offsetX, offsetY } = event;

      setX(offsetX);
      setY(offsetY);
    };
    window.addEventListener("mousemove", handler);

    return function cleanUp() {
      window.removeEventListener("mousemove", handler);
    };
  }, []);

  return { x, y };
}

function CustomHook() {
  const { x, y } = useMouseMove();
  return (
    <>
      <h1>
        X {x}, Y {y}
      </h1>
      <h1>Sqrt of X and Y</h1>
      {Math.sqrt(x)}, {Math.sqrt(y)}
    </>
  );
}

export { CustomHook };
