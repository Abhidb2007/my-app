import {useState} from "react";
import "./App.css"
//a clock with start and stop button
function App(){
  const[currentCount, setCurrentCount]=useState(1);
  const timeRef=useRef(null);
  function startClock(){
    if(timeRef.current)return;
    timeRef.current=setInterval(function(){
      setCurrentCount(c=>c+1);
  
  
    },1000);
  } 
  function stopClock() {
    clearInterval(timerRef.current);
    timerRef.current = null; // reset so start can work again
  }

  return <div>
    {currentCount}
    
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>

}
export default App;
