import {useState} from "react";
import "./App.css"
//a clock with start and stop button
function App(){
  const[currentCount, setCurrentCount]=useState(0);
  function startClock(){
    setInterval(function(){
      setCurrentCount(count=count+1);
  
  
    },1000);
  }  

  return <div>
    {currentCount}
    <button input id="text"></button>
    <button onClick={startClock}>start</button>
  </div>

}
export default App;
