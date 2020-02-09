import React from 'react';
import {Grommet} from 'grommet';
// import {Notification} from 'grommet-icons';
import AppBar from './components/AppBar'
// import './App.css';

import Grid from './components/Grid'
import GameProvider from './state/context';

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}

// const AppBar = (props) => (
//   <Box
//     tag="header"
//     direction="row"
//     align="center"
//     justify="between"
//     background="brand"
//     pad={{left: 'medium', right: 'small', vertical: 'small'}}
//     elevation='medium'
//     style={{zIndex:'1'}}
//     {...props}
//   />
// );

function App() {
  return (
    <Grommet theme={theme}>
      <AppBar>
        </AppBar>
      <GameProvider>
        <Grid gridSize="5" />
      </GameProvider>
    </Grommet>
  );
}

export default App;