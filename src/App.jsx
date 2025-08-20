import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Navigation Menu */}
      
        <nav>
          <a href="/">Allen</a>
          <a href="/sports-play-class-11">Class 10</a>
          <a href="/sports-play-class-12">Class 11</a>
        </nav>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sports-play-class-10" element={<Class10 />} />
          <Route path="/sports-play-class-11" element={<Class11 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
function Errorpage(){
  return <div>
    Sorry Page not found
  </div>
}
function Landing() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}


function Class10() {
  return <div>Sports Play for Class 10th</div>;
}


function Class11() {
  const navigate=useNavigate();
  function redirectUser(){
    navigate("/");
  }
  return <div>

    Sports Play for Class 11th
    <button onClick={redirectUser}>Go back to landing page</button>
    </div>;
}

export default App;
