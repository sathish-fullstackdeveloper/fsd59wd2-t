import { useState } from "react";

const App = () => {

  let [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  console.log('rendering component...');

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default App;