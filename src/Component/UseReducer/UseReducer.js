import { useReducer } from "react";

const counterReducer = (state, action) => {
  switch (action) {
    case "RESET":
      return { count: 0 };
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    default:
      throw new Error("Action not found");
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  console.log(state);

  return (
    <>
      <h1>{state.count}</h1>
      <button type="button" onClick={() => dispatch("INC")}>
        +
      </button>
      <button type="button" onClick={() => dispatch("RESET")}>
        Reset
      </button>
      <button type="button" onClick={() => dispatch("DEC")}>
        -
      </button>
    </>
  );
}

export { UseReducer };
