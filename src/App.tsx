import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className='App' >
        <BrowserRouter>
          <Switch>
            <Route path='/' component={About}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
