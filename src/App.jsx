import React, {createContext, useContext,useState} from "react"
const CountContext = createContext();
const CountUpdateContext = createContext();
export function useCount(){
  return useContext(CountContext);
}
export function useCountUpdate(){
  return useContext(CountUpdateContext);
}
function CountProvider({children}){
  const[count, setCount]=useState(0);
  const increment=()=>setCount(prev=>prev+1);
  return (
    <CountContext.Provider value={count}>
      <CountUpdateContext.Provider value={increment}>
        {children}
      </CountUpdateContext.Provider>
    </CountContext.Provider>
  );

} 
function Display() {
  const count=useCount();
  return <h1>Count:{count}</h1>;

}
function Button (){
  const increment=useCountUpdate();
  return <button onClick={increment}>increase</button>;

}
export default function App(){
  return(
    <CountProvider>
      <Display/>
        <Button/>
    </CountProvider>
  )
}