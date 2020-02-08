import React from 'react';
import './App.css';

import Grid from './components/Grid'
import GameProvider from './state/context';

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Grid gridSize="5" />
        <h1>
          "test"
        </h1>
      </GameProvider>
    </div>
  );
}

export default App;