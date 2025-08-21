import "./App.css"
function App(){
  function focusOnInput(){
    document.getElementById("text").focus()
  }
  return <div>
    signUp<br/>
    <input id="name" type="text"></input>
    <input id="name" type="text"></input>
    <button onClick={{focusOnInput}}>Submit</button>
  </div>
}
export default App  