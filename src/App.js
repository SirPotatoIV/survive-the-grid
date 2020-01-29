import React from 'react';
import './App.css';

import Grid from './components/Grid'
import GameContext from './state/context';

function App() {
  return (
    <div className="App">
      <GameContext>
        <Grid gridSize = "5" />
      </GameContext>
    </div>
  );
}

export default App;
