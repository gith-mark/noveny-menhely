import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import NovenyAdatbazis from "./components/NovenyAdatbazis";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Főoldal
        </Link>
        <Link to="/services" className="nav-link">
          Szolgáltatások
        </Link>
        <Link to="/contact" className="nav-link">
          Kapcsolat
        </Link>
        <Link to="/NovenyAdatbazis" className="nav-link">
          Növény adatbázis
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/NovenyAdatbazis" element={<NovenyAdatbazis />} />
      </Routes>
    </Router>
  );
}

export default App;
