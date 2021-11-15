// import React from "react";

// import animals from "./data";

// const [cat, dog] = animals;

// console.log(cat);

// const {name, sound} = cat;

// console.log(name);
// console.log(sound);

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

function createCar(car) {
  const {
    model,
    coloursByPopularity: [topColour],
    speedStats: { topSpeed, zeroToSixty }
  } = car;
  return (
    <tr>
      <td>{model}</td>
      <td>{topSpeed}</td>
      <td>{topColour}</td>
    </tr>
  );
}

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    {cars.map(createCar)}
  </table>,
  document.getElementById("root")
);
