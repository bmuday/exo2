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
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  return (
    <div>
      <h2>Counter</h2>
      <div id="count">
        <span onClick={countDown}>-</span>
        {counter}
        <span onClick={countUp}>+</span>
      </div>
    </div>
  );
};

export default Count;
