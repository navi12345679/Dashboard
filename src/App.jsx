import React from 'react';
import Dashboard from './Components/Dashboard';
import Search from './Components/Search';

const App = () => {
  return (
    <div>
      <h1>Dynamic Dashboard</h1>
      <Search />
      <Dashboard />
    </div>
  );
};

export default App;
