import React from 'react';
import { connect } from 'react-redux';
import ScoreCard from '../ScoreCard';
import './LeaderBoard.css';

function LeaderBoard ({ sortedUsers }){
    return (
      <div className="LeaderBoard">
        {sortedUsers.map(su =>
          (<ScoreCard key={su.user.id} profile={su} />
        ))}
      </div>
    );
}

function mapStateToProps({ users, questions }){

  const usersIter = Object.entries(users);
  const questionsIter = Object.entries(questions);

  const sortedUsers =
    usersIter
      .map(([id, user]) => ({
        user,
        answered:
          questionsIter
            .filter(([_, q]) => [...q.optionOne.votes, ...q.optionTwo.votes].includes(id))
            .length,
        asked:
          questionsIter
            .filter(([_, q]) => q.author === id)
            .length
        }))
      .sort((u1, u2) =>
        u2.asked + u2.answered - (u1.asked + u1.answered))

  return {
    sortedUsers
  };
}

export default connect(mapStateToProps)(LeaderBoard);