import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import { AuxlyConsumer, LoginWithContext, Controls, JoinParty } from '..';

const Header = (props) => {
  return (
    <header className="AppHeader">
      <h1 className="AppTitle">{ props.user || 'Auxly' }</h1>
    </header>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AuxlyConsumer>
          <Header />
        </AuxlyConsumer>
        <div className="AppContent">
          <Switch>
            <Route exact path="/" component={LoginWithContext} />
            <Route path="/login/:accessToken/:refreshToken" component={LoginWithContext} />
            <Route path="/controls" component={Controls} />
            <Route path="/join" component={JoinParty} />
            <Route path="/error/:errorMsg" component={Controls} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
