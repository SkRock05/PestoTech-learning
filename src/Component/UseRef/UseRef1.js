import { useRef } from "react";

function UseRef1() {
  const inputElement = useRef();
  const focusElement = () => {
    inputElement.current.value = "Saurabh Kumar";
  };
  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusElement}>Focus Input</button>
    </>
  );
}

export { UseRef1 };
