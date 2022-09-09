import React from 'react';
import './App.css';
import FocusInput from './components/FocusInput';
import ClassTImer from './components/ClassTImer';
import HookCounter from './components/HookCounter';

function App() {
  return (
    <div className="App">
      <FocusInput />
      <ClassTImer />
      <HookCounter />
    </div>
  );
}

export default App;
