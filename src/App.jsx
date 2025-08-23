import React, { createContext, useContext, useState } from "react";

const CountContext = createContext(); // The box

function CountProvider({ children }) {
  const [count, setCount] = useState(0); // number inside the box

  const increment = () => setCount(prev => prev + 1); // increase number

  return (
    <CountContext.Provider value={{ count, increment }}>
      {children} {/* All children can access this box */}
    </CountContext.Provider>
  );
}

function Display() {
  const { count } = useContext(CountContext); // read number from the box
  return <h1>Count: {count}</h1>;
}

function Button() {
  const { increment } = useContext(CountContext); // press button to increase
  return <button onClick={increment}>Increase</button>;
}

function App() {
  return (
    <CountProvider>
      <Display />
      <Button />
    </CountProvider>
  );
}

export default App;
