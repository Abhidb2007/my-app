import "./App.css"
import{BrowserRouter, Routes, Route} from "react-router-dom";
function App(){
  return <div>
    Allen|calss11|class12
    <BrowserRouter>
    <Routes>
      <Route path="/neet/online-class-11" element={<Class11Program/>}/>
      <Route path="/neet/online-calss-12" element={<Class12Program/>}/>
      <Route path="/" element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
  </div>
}
function Landing(){
  return<div>
    <h1>home page</h1>
  </div>
}
function Class11Program(){
  return <div>
    Neet Class 11th
  </div>

}
function Class12Program(){
  return <div>
    Neet Class 12th
  </div>

}
export default App