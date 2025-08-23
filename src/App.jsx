import {useState} from "react";
import "./App.css";
function App(){
  return <div>
    <Fan/>
 </div>
}
function Fan(){
  const[fanOn, setFanOn]=useState(true);
  return(
    <div>
      <FanState fanOn={fanOn}/>
      <ToggleFanState fanOn={fanOn} setFanOn={setFanOn}/>

    </div>
  );
}
function FanState({fanOn}){
  return <div>{fanOn? "fan on" : "fan off"}</div>;

}
function ToggleFanState({fanOn, setFanOn}){
  return (
    <button onClick={()=>setFanOn(!fanOn)}>
      Toggle Fan
    </button>
  );
}
export default App;