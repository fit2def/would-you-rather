import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { truncateText } from '../../utils/helpers';
import Avatar from '../Avatar';
import './QuestionPreview.css';

function QuestionPreview({ question, user}) {
  return (
    <div className='QuestionPreview'>

      <div className='asks-statement-block'>
        <span className='asks-statement'>{user.name}</span> asks:
      </div>

      <div className='avatar-block'>
        <Avatar user={user} />
      </div>

      <div className='would-you-rather-block'>
        <p className='would-you-rather'>WOULD YOU RATHER...</p>
        <p className='option-preview'>{truncateText(question.optionOne.text)}</p>
        <p className='option-preview'>or</p>
        <p className='option-preview'>{truncateText(question.optionTwo.text)}?</p>
        <NavLink
          className='btn btn-light view-poll-btn'
          to={`/questions/${question.id}`}>
          View Poll
        </NavLink>
      </div>

    </div>
  );
}

function mapStateToProps({users}, {question}) {
  const user = users[question.author];
  return {
    question,
    user
  };
}

export default connect(mapStateToProps)(QuestionPreview);