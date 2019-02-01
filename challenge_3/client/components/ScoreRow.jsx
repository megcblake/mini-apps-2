import React from 'react';

const ScoreRow = ({ sum, i, rolls }) => {
  const roll1 = rolls[i * 2];
  const roll2 = rolls[(i * 2) + 1];
  return (
    <td>
      <div className="rolls">
        <div className="roll">
          {roll1}
        </div>
        <div className="roll">
          {roll2}
        </div>
      </div>
      {sum}
    </td>
  );
};

export default ScoreRow;
