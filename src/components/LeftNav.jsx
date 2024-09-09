import React from 'react';
import { Link } from 'react-router-dom';
import '../Asserts/style/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Navigation</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/grid">Grid</Link></li>
        <li><Link to="/chart">Chart</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
