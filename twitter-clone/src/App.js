import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Feed from './feed';
import Widgets from './Widgets';

function App() {
  return (
    // BEM
    <div className="App">

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
