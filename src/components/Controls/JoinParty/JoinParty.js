import React, { Component } from 'react';
import './JoinParty.css';

import { AuxlyConsumer, Pretty } from '../..';

class JoinParty extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="JoinPartyContainer">
        <input type="text"></input>
        <Pretty.Button>Join</Pretty.Button>
      </div>
    );
  }
}

export default () => <AuxlyConsumer><JoinParty /></AuxlyConsumer>;
