import { useState } from "react";

function App() {
  return (
    <div>
      <ToggleMessage />
    </div>
  );
}

function ToggleMessage() {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setShow(!show);
    setCount(count + 1); // Increase count on every button click
  };

  return (
    <div style={{ margin: "20px", padding: "10px", border: "1px solid #ccc" }}>
      <button onClick={handleClick}>
        {show ? "Hide Message" : "Show Message"}
      </button>

      {show && <p>Hello! This message is toggled.</p>}

      <p>
        Notifications: <strong>{count}</strong>
      </p>
    </div>
  );
}

export default App;
