import React from 'react';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { Monitoring } from './Pages/Monitoring/Monitoring';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.mainContainer}>
      <Dashboard />
      <Monitoring />
    </div>
  );
}

export default App;
