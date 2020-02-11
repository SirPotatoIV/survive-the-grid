import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Grommet } from 'grommet';
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Spectator from './routes/Spectator/Spectator'
import GameProvider from './state/context';
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import PrivateRoute from "./routes/PrivateRoute"

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
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => <Spectator />} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={SignUp} />
            {/* <Route path="/dashboard" component={Dashboard} /> */}
          </Switch>
        </GameProvider>
      </Grommet>
    </BrowserRouter>
  );
}


export default App;