import  {useState} from "react";
function App(){
  return(
    <div style={{background:"grey",height:"100vh",width:"100vh" }}>
      <ToggleMessage/>
      <Greeting name={"abhi"}/>
    </div> 
  )   
}
function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"}
      </button>

      {show && <p>Hello! This message is toggled.</p>}
    </div>
  );
}  