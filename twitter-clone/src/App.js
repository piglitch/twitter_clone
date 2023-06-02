import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './feed';

function App() {
  return (
    // BEM
    <div className="App">

      {/* sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}

    </div>
  );
}

export default App;
