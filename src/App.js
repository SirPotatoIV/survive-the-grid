import React from 'react';
import {Grommet} from 'grommet';
// import './App.css';

import Grid from './components/Grid'
import GameProvider from './state/context';

function App() {
  return (
    <Grommet plain>
      <GameProvider>
        <Grid gridSize="5" />
      </GameProvider>
    </Grommet>
  );
}

export default App;