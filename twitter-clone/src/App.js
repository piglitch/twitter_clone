import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    // BEM
    <div className="App">

      <h1></h1>

      {/* sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}

    </div>
  );
}

export default App;
