import React from 'react';
import FlipMove from 'react-flip-move';
import { Players, calculatePlayerPosition } from '../api/players';
import Player from './Player';


class PlayersList extends React.Component {
  render() {
    const pList = Players.find({}, {
      sort: {
        score: -1
      }
    }).fetch();
    // console.log('p-list', pList);
    // console.log('ordered-list', calculatePlayerPosition(pList));
    return (
      <div>
        <FlipMove duration={350} easing="ease-out">
          {pList.length > 0 ? calculatePlayerPosition(pList).map(player => <Player key={player._id} player={player} />) : (
            <div className="item">
              <p className="item__message">Add player to start game</p>
            </div>
          )}
        </FlipMove>
      </div>
    );
  }
}

export default PlayersList;
