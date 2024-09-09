import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftNav from './components/LeftNav';
import Home from './components/Home';
import Grid from './components/Grid';
import Chart from './components/Chart';
import './App.css'; // Import your CSS file

const App = () => {
  return (
    <Router>
      <div className="app">
        <LeftNav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/grid" element={<Grid />} />
            <Route path="/chart" element={<Chart />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
