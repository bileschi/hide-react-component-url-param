import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className='App' >
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact></Route>
            <Route path='/about' component={About}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
