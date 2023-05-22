const Count = () => {
  const countDown = () => {
    console.log("down");
  };

  const countUp = () => {
    console.log("up");
  };
  return (
    <div className="count">
      <span onClick={countDown}>-</span>0<span onClick={countUp}>+</span>
    </div>
  );
};

export default Count;
