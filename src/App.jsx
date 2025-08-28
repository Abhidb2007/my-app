import { useState } from "react";
import "./App.css";
import { usePrev } from "./assets/hooks/use-prev";

function useDebounce(originalFn){
  const currentCheck=useRef();

const fn=()=>{
  clearTimeout(currentClock.current);
  currentClock.current=setTimeout(originalFn,300);


}
return fn
}
function App(){
  function sendDataToBackend(){
    fetch("api.amazon.com/search/");

   
}
const debounceFn=useDebounce(sendDataToBackend)
return(
  <>
  <input type="text" onChange={debounceFn}></input>
  </>
);

}