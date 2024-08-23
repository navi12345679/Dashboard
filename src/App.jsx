import React from 'react';
import Dashboard from './components/Dashboard';
import Search from './components/Search';

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
