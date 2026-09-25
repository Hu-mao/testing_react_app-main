import { useState } from "react";

interface CounterProps {
  value: number;
}

const Counter = ({ value }: CounterProps) => {
  const [count, setCount] = useState(value);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p data-testid="counter-value">{count}</p>
      <button onClick={increment}>Збільшити</button>
    </div>
  );
};

export default Counter;
