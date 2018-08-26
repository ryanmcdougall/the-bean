import React, { Component } from 'react';
import { Switch, Route } from 'react-router'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Application">
        <NavBar />
        <div className="App">
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
