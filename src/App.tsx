import React from 'react';
import './App.css';
import HelloWorld from './comps/HelloWorld';

const App: React.FC = () => {
  return (
    <div className="App">
      <HelloWorld name="Brian Cilent" />
    </div>
  );
}

export default App;
