import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footbar from '../Footbar/Footbar';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <div className="content">
        </div>
      </div>
      <Footbar />
    </div>
  );
}

export default App;