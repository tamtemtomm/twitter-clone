// Import Style
import "./App.css";

// Import Dependencies
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home isAuth={isAuth}/>} />
          <Route path="/auth" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
