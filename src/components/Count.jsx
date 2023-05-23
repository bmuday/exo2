import { useState } from "react";

function count() {} // standard function declaration

const arrowCount = () => {}; // arrow function declaration

(function () {})(
  // anonymous standard function declaration

  () => {}
); // anonymous arrow function declaration

const Count = () => {
  let [counter, setCounter] = useState(0);

  const countDown = () => {
    const newCounter = counter - 1;
    setCounter(newCounter);
  };

  const countUp = () => {
    console.log("test", test);
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  return (
    <div id="count">
      <span onClick={countDown}>-</span>
      {counter}
      <span onClick={countUp}>+</span>
    </div>
  );
};

export default Count;
