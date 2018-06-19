import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import './Login.css';
import '../Controls/Controls.css';

import { login } from '../../lib/api';
import { AuxlyConsumer, Pretty } from '..';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasClicked: false,
      redirectLink: undefined,
      loggedIn: false,
      joinPartyClicked: false
    };

    const { accessToken, refreshToken } = this.props.match.params;

    if (accessToken && refreshToken) {
      this.setTokens(this.props.match.params);
      this.state.loggedIn = true;
    }
  }

  onClick = (e) => {
    e.preventDefault();
    login()
      .then(data => data.redirectLink)
      .then((link) => this.setState({
        hasClicked: true,
        redirectLink: link
      }));
  };

  onJoinParty = (e) => {
    this.setState({ joinPartyClicked: true });
  };

  setTokens = (params) => {
    this.props.actions.login(params);
  };

  render() {
    if (this.state.redirectLink) {
      window.location.href = this.state.redirectLink;
    }

    if (this.state.loggedIn) return <Redirect to="/controls" />;
    if (this.state.joinPartyClicked) return <Redirect to="/join" />;

    return (
      <div className="PartyButtons">

        <Pretty.Button className="Login" onClick={this.onClick}>
          Login to Start a Party
        </Pretty.Button>

        <Pretty.Button className="JoinPartyButton" onClick={this.onJoinParty}>
          Join a Party
        </Pretty.Button>
      </div>
    );
  }
}

const LoginWithContext = (props) => <AuxlyConsumer><Login {...props} /></AuxlyConsumer>;

export { Login, LoginWithContext };
