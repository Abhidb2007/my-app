import {useState} from "react";
import "./App.css";
import{usePrev} from "./hooks/use-Prev";
function App(){
    const[state,setState]=useState(0);
    const prev=usePrev(state);
    return (
        <>
        <p>{state}</p>
        <button onclick={()=>{
            setState((curr)=curr+1);
        }}>
            click me
            
        </button>
        <p>the previous value was{prev}</p>
        </>
    )
}
export default App;