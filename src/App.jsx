import "./App.css";
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

// Main App
function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Allen</Link> |{" "}
        <Link to="/sports-play-class-10">Class 10</Link> |{" "}
        <Link to="/sports-play-class-11">Class 11</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="sports-play-class-10" element={<Class10 />} />
          <Route path="sports-play-class-11" element={<Class11 />} />
          <Route path="*" element={<Errorpage />} />
        </Route>
      </Routes>

      {/* Footer */}
      <footer>Footer | Contact Us</footer>
    </BrowserRouter>
  );
}

// Layout Component
function Layout() {
  return (
    <div style={{ height: "100vh", backgroundColor: "yellow" }}>
      <Header />

      <div style={{ height: "50vh", backgroundColor: "red" }}>
        <Outlet />
      </div>

      <footer style={{ marginTop: "20px" }}>Footer inside Layout</footer>
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header style={{ padding: "30px", backgroundColor: "lightblue" }}>
      <h2>Website Header</h2>
    </header>
  );
}

// Error Page
function Errorpage() {
  return <div>❌ Sorry, page not found</div>;
}

// Landing Page
function Landing() {
  return (
    <div>
      <h1>🏠 Home Page</h1>
    </div>
  );
}

// Class 10 Page
function Class10() {
  return <div>⚽ Sports Play for Class 10th</div>;
}

// Class 11 Page
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
