
import { Mongo } from 'meteor/mongo';
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const calculatePlayerPosition = players => {
  let rank = 1;
  return players.map((player, i) => {
    if (i !== 0 && players[i - 1].score > player.score) rank += 1;
    return { ...player, rank, position: numeral(rank).format('0o') };
  });
};
