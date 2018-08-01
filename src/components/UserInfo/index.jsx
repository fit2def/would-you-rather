import React from 'react';
import { connect } from 'react-redux';
import Avatar from '../Avatar';
import './UserInfo.css';

function UserInfo({ user }) {
  return (
    <div className='UserInfo'>
      <span className='user-name'>{user.name}</span>
      <div className='mini-avatar-block'>
        <Avatar user={user}/>
      </div>
    </div>
  );
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser];
  return {
    user
  };
}

export default connect(mapStateToProps)(UserInfo);