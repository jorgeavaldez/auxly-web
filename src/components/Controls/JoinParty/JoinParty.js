import React, { Component } from 'react';
import './JoinParty.css';

import { AuxlyConsumer, Pretty } from '../..';

/**
   This class serves as the input form for joining a party on the web
   interface.
 */
class JoinParty extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characterCode: '',
      redirect: true
    };
  }

  onSubmit = (e) => {
    e.preventDefault();
    // TODO: call joinparty api
  };

  redirect = (props) => {
  };

  render() {
    return (
      <div className="JoinPartyContainer">
        <input type="text" value={ this.state.characterCode }></input>
        <Pretty.Button onClick={this.onSubmit}>Join</Pretty.Button>
      </div>
    );
  }
}

export default () => <AuxlyConsumer><JoinParty /></AuxlyConsumer>;
