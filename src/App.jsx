import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(1); // start from 1

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1); // update count every second
    }, 1000);

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{count}</h1>
      <p>This number decreases automatically (rendering).</p>
    </div>
  );
}

export default App
