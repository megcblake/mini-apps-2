import React from 'react';
import ScoreRow from './ScoreRow.jsx';

const ScoreCard = ({ rolls }) => {
  const scores = [];
  rolls.forEach((roll, i) => {
    if (i % 2 !== 0) {
      let frameScore = rolls[i] + rolls[i - 1];
      if (frameScore < 10) {
        scores.push(frameScore);
      } else if (rolls[i] === 10) { // check for strike
        // check first subsequent roll for null if another strike thrown
        const sub1Roll = rolls[i + 1] !== null ? rolls[i + 1] : rolls[i + 2];
        // check second subsequent roll
        let sub2Roll = null;
        if (rolls[i + 1] !== null) { // if roll not a strike
          sub2Roll = rolls[i + 2];
        } else if (rolls[i + 3] !== null) { // if roll not a strike
          sub2Roll = rolls[i + 3];
        } else {
          sub2Roll = rolls[i + 4];
        }
        // account for zero as an allowed falsey value
        if ((sub1Roll && sub2Roll) || sub1Roll === 0 || sub1Roll === 0) {
          frameScore += sub1Roll + sub2Roll;
          scores.push(frameScore);
        }
      } else { // check for spare
        const subRoll = rolls[i + 1] !== null ? rolls[i + 1] : rolls[i + 2];
        if (subRoll || subRoll === 0) {
          frameScore += subRoll;
          scores.push(frameScore);
        }
      }
    }
  });
  const scoreSums = scores.map((score, i) => scores.slice(0, i + 1).reduce((a, b) => a + b));
  const scoreDisplay = scoreSums.map((sum, i) => (
    <ScoreRow sum={sum} key={i} i={i} rolls={rolls} />
  ));
  return (
    <div className="scores">
      <h1>Score Card</h1>
      <table>
        <thead>
          <tr>
            <th>One</th>
            <th>Two</th>
            <th>Three</th>
            <th>Four</th>
            <th>Five</th>
            <th>Six</th>
            <th>Seven</th>
            <th>Eight</th>
            <th>Nine</th>
            <th>Ten</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {scoreDisplay}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ScoreCard;
