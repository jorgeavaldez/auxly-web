import React, { Component } from 'react';
import { getUser } from '../../lib/api';

const AuxlyContext = React.createContext();

class AuxlyProvider extends Component {
  state = {
    accessToken: undefined,
    refreshToken: undefined,
    user: undefined,
    error: null,
    actions: {
      login: ({ accessToken, refreshToken }) => {
        this.setState({ accessToken, refreshToken });
        console.log('Logged In');
      },
      getUser: () => {
        if (this.state.user) return;
        getUser().then(user => this.setState({ user }));
      },
      error: (err) => this.setState({ error: err }),
    }
  };

  render() {
    return <AuxlyContext.Provider value={this.state}>{this.props.children}</AuxlyContext.Provider>;
  }
}

class AuxlyConsumer extends Component {
  bindContextToChildren = (ctx) => {
    const { children } = this.props;

    return React.Children.map(children, child => React.cloneElement(child, { ...ctx }));
  };

  testContext = (ctx) => console.dir(ctx);

  render() {
    return (
      <AuxlyProvider>
        <AuxlyContext.Consumer>
          {this.bindContextToChildren}
        </AuxlyContext.Consumer>
      </AuxlyProvider>
    );
  }
}

export { AuxlyProvider, AuxlyConsumer };
