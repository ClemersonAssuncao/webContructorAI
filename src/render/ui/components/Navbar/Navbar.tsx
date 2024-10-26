import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <h1>Open Note</h1>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Notes</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;