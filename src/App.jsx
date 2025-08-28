import { useState, useRef } from "react";
import "./App.css";

// custom hook for debounce
function useDebounce(originalFn, delay = 300) {
  const currentClock = useRef(null);

  const fn = (...args) => {
    // clear previous timer
    clearTimeout(currentClock.current);

    // set new timer
    currentClock.current = setTimeout(() => {
      originalFn(...args); // call original function with args
    }, delay);
  };

  return fn;
}

function App() {
  function sendDataToBackend(e) {
    fetch(`https://api.amazon.com/search?q=${e.target.value}`);
    console.log("API called with:", e.target.value);
  }

  const debounceFn = useDebounce(sendDataToBackend, 500); // wait 0.5s

  return (
    <>
      <input type="text" onChange={debounceFn} placeholder="Search..." />
    </>
  );
}

export default App;
