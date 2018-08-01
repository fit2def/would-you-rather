import React from 'react';
import Avatar from '../Avatar';
import './Asks.css';

export default function Asks({ asker }) {
  return (
    <div className='asks-block'>

      <div className='avatar-block'>
        <Avatar user={asker} />
      </div>

      <div className='would-you-rather-block no-padding-right'>
        <p>
          <span className='asks-statement'>{asker.name}</span> asks:
        </p>
        <h2 className='would-you-rather-lg'>WOULD YOU RATHER...</h2>
      </div>

    </div>
  );
}