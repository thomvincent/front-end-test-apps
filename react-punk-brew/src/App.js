import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PunkHeader from './PunkHeader';
import BeerDetails from './BeerDetails';
import CodeSplit from './CodeSplit';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <PunkHeader />
        {/* Router Switch */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/beer/:id' component={BeerDetails} />
          <Route exact path='/code-split' component={CodeSplit} />
        </Switch>
      </main>
    );
  }
}

export default App;
