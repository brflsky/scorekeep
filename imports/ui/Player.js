import React from 'react';
import PropTypes from 'prop-types';
import { Players } from '../api/players';


class Player extends React.Component {
  removeHandler = (_id) => {
    Players.remove({ _id });
  }

  incDecHandler = (_id, inc) => {
    Players.update({ _id }, {
      $inc: {
        score: inc ? 1 : -1
      }
    });
  }

  render() {
    const itemClass = `item item--position-${this.props.player.rank}`;
    return (
      <div className={this.props.player.rank <= 3 ? itemClass : 'item'} >
        <div className="player">
          <div>
            <h3 className="player__name">{this.props.player.name}</h3>
            <p className="player__stats">{this.props.player.rank} {this.props.player.position} {this.props.player.score} point(s)</p>
          </div>
          <div className="player__actions">
            <button className="button button--round" onClick={() => this.incDecHandler(this.props.player._id, false)}>-</button>
            <button className="button button--round" onClick={() => this.incDecHandler(this.props.player._id, true)}>+</button>
            <button className="button button--round" onClick={() => this.removeHandler(this.props.player._id)}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

Player.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired
  }).isRequired
};

export default Player;
