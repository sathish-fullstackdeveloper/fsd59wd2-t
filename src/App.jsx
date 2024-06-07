import { useEffect, useState } from "react";

const App = () => {

  let [count, setCount] = useState(0);

  // useEffect is a hook that allows you to perform side effects in function components

  // useEffect runs when the component mounts and every time it updates
  // useEffect(() => {
  //   console.log(`Count: ${count}`);
  // })

  // useEffect runs when the component mounts
  // useEffect(() => {
  //   console.log(`Count: ${count}`);
  // }, []);

  // useEffect runs when the component mounts and when count updates
  useEffect(() => {
    console.log(`Count: ${count}`);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default App;