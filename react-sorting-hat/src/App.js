import React, { Component } from 'react';
import { Route } from 'react-router'
import Header from './Components/Header';
import SortingHat from './Components/SortingHat';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Header} />
        <Route path="/sortinghat" component={SortingHat} />
      </React.Fragment>
    );
  }
}

export default App;
