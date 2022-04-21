import "./styles.css";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <h1>Counter{counter}</h1>
      <button onClick={increment}>increment</button>

      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};
export default App;
