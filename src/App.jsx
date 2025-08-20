import "./App.css";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      
    
          
        

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sports-play-class-10" element={<Class10 />} />
          <Route path="/sports-play-class-11" element={<Class11 />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>

        {/* Footer */}
        <footer>Footer | Contact Us</footer>
    
    </BrowserRouter>
  );
}
function Layout(){
  return <div style={{height:"100vh"}}>
    <Link to="/">Allen</Link>
    <Link to="/sports-play-class-10">Class 10</Link>
    <Link to="/sports-play-class-11">Class 11</Link>
    <div style={{height:"50vh"}}>
      <Outlet/>
      footer
    </div>

  </div>
}

function Errorpage() {
  return <div>❌ Sorry, page not found</div>;
}

function Landing() {
  return (
    <div>
      <h1>🏠 Home Page</h1>
    </div>
  );
}

function Class10() {
  return <div>⚽ Sports Play for Class 10th</div>;
}

function Class11() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return (
    <div>
      🏀 Sports Play for Class 11th
      <br />
      <button onClick={redirectUser}>Go back to landing page</button>
    </div>
  );
}

export default App;
