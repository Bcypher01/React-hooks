import React from 'react';
import logo from './logo.svg';
import './App.css';
import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervaHookCounter from './components/IntervaHookCounter';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      {/* <HookCounterOne /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervaHookCounter /> */}
      <DataFetching />
    </div>
  );
}

export default App;
