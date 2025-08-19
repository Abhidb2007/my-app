import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      {/* Navigation Menu */}
      <BrowserRouter>
        <nav>
          <Link to="/">Allen</Link>
          <Link to="/sports-play-class-10">Class 10</Link> |{" "}
          <Link to="/sports-play-class-11">Class 11</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sports-play-class-10" element={<Class10 />} />
          <Route path="/sports-play-class-11" element={<Class11 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
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
  return <div>Sports Play for Class 11th</div>;
}

export default App;
