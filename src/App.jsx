import {useState} from "react";
import "./App.css"
function App(){
  const[count,setCount]=useState(0);

function increase(){
  setCount(count+1)
}
return(
  <div>
    <button onClick={increase}>increase{count}</button>
  </div>
)
}
export default App;