import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Box,Grommet} from 'grommet';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
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

function App() {
  return (
    <BrowserRouter>
      <Grommet theme={theme}>
        <GameProvider>
          <Navbar/>
          <Dashboard/>
        </GameProvider>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;