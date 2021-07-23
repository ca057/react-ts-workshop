import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((c) => c + 1);
  };
  const decrementCount = () => {
    setCount((c) => c - 1);
  };

  return (
    <div className="row">
      <button onClick={decrementCount}>-</button>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default Counter;
