import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

const Counter: React.FC<CounterProps> = ({ initialValue = 100 }) => {
  const [count, setCount] = useState(initialValue);

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
