import React from 'react';
import './Avatar.css';

export default function Avatar({ user }) {
  return (
    <img
      className='Avatar'
      src={user.avatarURL}
      alt={`${user.name}'s avatar`} />
  )
}