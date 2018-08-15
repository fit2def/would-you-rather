import React from 'react';
import './Answer.css';

function Answer({ metrics, text, vote, customStyles}) {

  const { percentage, ratio, didVote, canVote } = metrics;

  return (
    <div
      onClick={canVote ? vote : null}
      className={`Answer ${customStyles}`}
      style={{
         display: percentage? 'inline-block' : 'none',
         width: `${percentage}%`,
         cursor: canVote ? 'pointer' : 'default'
      }}>

      <p>{text}</p>

      {!canVote &&
        <div>
          <span>{ratio}</span>
          <span>{percentage}%</span>
        </div> }

      {didVote && <p>***YOUR ANSWER***</p>}

    </div>
  );
}

export default Answer;