import React from 'react';
import Avatar from '../Avatar';

export default function ScoreCard({ profile }){
  const { user, answered, asked } = profile;
  return (
    <div className='ScoreCard'>
      <div className='avatar-block'>
        <Avatar user={user}/>
      </div>
      <div>
        <p>Answered: {answered}</p>
        <p>Asked: {asked}</p>
      </div>
      <div>
        Score: {answered + asked}
      </div>
    </div>
  );
}