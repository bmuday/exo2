import { useState } from "react";

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
    <div className="count">
      <span onClick={countDown}>-</span>
      {counter}
      <span onClick={countUp}>+</span>
    </div>
  );
};

export default Count;
