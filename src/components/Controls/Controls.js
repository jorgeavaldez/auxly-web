import React, { Component } from 'react';

import './Controls.css';

import { AuxlyConsumer, Pretty } from '..';

const ControlsHeader = (props) => {
  const { user, actions } = props;

  if (!user) {
    actions.getUser();
    return <h2 className="ControlsHeader">Loading...</h2>;
  }

  console.dir(user);
  const { display_name } = user;
  return <h2 className="ControlsHeader">{`Hello ${ display_name }!`}</h2>;
};

const PartyButtons = (props) => {
  const { user, actions } = props;

  if (!user) {
    return <div />;
  }

  return (
    <div className="PartyButtons">
      <Pretty.Button>Start a Party</Pretty.Button>
    </div>
  );
};

class Controls extends Component {
  render() {
    return (
      <AuxlyConsumer>
        <ControlsHeader />
        <PartyButtons />
      </AuxlyConsumer>
    );
  }
}

export default Controls;
