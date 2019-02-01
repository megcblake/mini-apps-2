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
        const sub1Throw = rolls[i + 1] !== null ? rolls[i + 1] : rolls[i + 2];
        let sub2Throw = null;
        if (rolls[i + 1] !== null) {
          sub2Throw = rolls[i + 2];
        } else if (rolls[i + 3] !== null) {
          sub2Throw = rolls[i + 3];
        } else {
          sub2Throw = rolls[i + 4];
        }
        if ((sub1Throw && sub2Throw) || sub1Throw === 0 || sub1Throw === 0) {
          frameScore += sub1Throw + sub2Throw;
          scores.push(frameScore);
        }
      } else { // check for spare
        const subThrow = rolls[i + 1] !== null ? rolls[i + 1] : rolls[i + 2];
        if (subThrow || subThrow === 0) {
          frameScore += subThrow;
          scores.push(frameScore);
        }
      }
    }
  });
  const scoreSums = scores.map((score, i) => scores.slice(0, i + 1).reduce((a, b) => a + b));
  const scoreDisplay = scoreSums.map((sum, i) => (
    <ScoreRow sum={sum} key={i} />
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
}

export default ScoreCard;
