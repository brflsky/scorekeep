import React from 'react';
import { Players } from '../api/players';

class AddPlayer extends React.Component {
  handlerSubmit = (e) => {
    console.log('event', e);
    e.preventDefault();
    Players.insert({
      name: e.target.playerName.value,
      score: 0
    });
    e.target.playerName.value = '';
  }
  render() {
    return (
      <div className="item">
        <form className="form" onSubmit={this.handlerSubmit}>
          <input className="form__input" type="text" name="playerName" placeholder="Player" />
          <button className="button" >Add player</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
