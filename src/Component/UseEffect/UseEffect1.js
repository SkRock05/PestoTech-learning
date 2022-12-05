import React, { useState } from "react";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={() => {
          setCar((previousState) => {
            return { ...previousState, model: "Mustang GT" };
          });
        }}
      >
        Change Model
      </button>
    </>
  );
}

export { Car };
