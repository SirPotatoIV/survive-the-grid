import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Box,Grommet} from 'grommet';
import Navbar from './components/Navbar'


import Grid from './components/Grid'
import GameProvider from './state/context';

const theme = {
  global: {
    colors: {
      brand: 'black'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
    button: {
      border: {
        width: '1px',
        radius: '4px',
      },
      padding: {
        vertical: '8px',
        horizontal: '16px'
      }
    }
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
    <BrowserRouter>
      <Grommet theme={theme}>
        <Navbar/>
        <GameProvider>
          <Box pad={{left: 'medium', right: 'medium', vertical: 'medium'}}>
            <Grid gridSize="5" />
          </Box>
        </GameProvider>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;