import React, { Component } from 'react';
import './JoinParty.css';

import { AuxlyConsumer, Pretty } from '../..';

const Header = (props) => (
  <div className="PartyViewHeader">
    <h3>Party View</h3>
  </div>
);

const SongSearch = (props) => (
  <div className="SongSearchContainer">
    <input type="text" />
    <Pretty.Button>Add to Queue</Pretty.Button>
  </div>
);

const SongDetails = ({ song }) => (
  <div className="SongDetails">
    { song.title }
  </div>
);

const QueueView = ({ playlist }) => (
  playlist.map(song => <SongDetails song={song} />);
);

class PartyView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="PartyViewContainer">
        <Header />
        <SongSearch />
        <QueueView />
      </div>
    );
  }
}

export default () => <AuxlyConsumer><PartyView /></AuxlyConsumer>;
