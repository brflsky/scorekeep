import React from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayersList from './PlayersList';

class App extends React.Component {
  render() {
    return (
      <div>
        <TitleBar title="Score Keeper" />
        <div className="wrapper">
          <PlayersList />
          <AddPlayer />
        </div>
      </div>
    );
  }
}

export default App;


