import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Pages/HomePage.js";
import SeatReservation from "./Pages/Seatmap.js";

// Homepage Component
function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Our Homepage</h1>
        <p>Discover amazing content and features.</p>
        <Link to="/about">
          <button className="App-link">Learn More</button>
        </Link>
      </header>
    </div>
  );
}



function App() {
  return (
    <Router>
      

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/seatMap" element={<SeatReservation />} />


          
        </Routes>
      
    </Router>
  );
}

export default App;
