import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAnswerMetrics } from '../../utils/helpers';
import { answerQuestionAsync } from '../../actions/questions';
import Asks from '../Asks';
import Answer from '../Answer';
import './Question.css';

class Question extends Component {

  componentDidMount() {
    this.noAuth() || this.badQuestion();
  }

  noAuth() {
    const { authedUser, history } = this.props;
    if (!authedUser) {
      history.push('/login');
      return true;
    }
  }

  badQuestion() {
    const { question, history } = this.props;
    if (!question) {
      history.push('/error');
    }
  }

  vote(option) {
    const { authedUser, question }  = this.props;
    this.props.dispatch(answerQuestionAsync(authedUser, question, option));
  }

  render() {
    const { authedUser, users, question } = this.props;

    if (!users || !question)
      return null;

    const [ leftMetrics, rightMetrics ] = getAnswerMetrics(authedUser, question)

    return (
      <div className='Question'>

        <Asks asker={users[question.author]}/>

        <div className='answers-block'>

          <Answer
            metrics={leftMetrics}
            vote={() => this.vote('optionOne')}
            text={question.optionOne.text}
            customStyles='left' />

          <Answer
            metrics={rightMetrics}
            vote={() => this.vote('optionTwo')}
            text={question.optionTwo.text}
            customStyles='right' />
        </div>

      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { match }) {
  const id = match.params.question_id;
  const question = questions[id];

  return {
    authedUser,
    users,
    question
  };
}

export default withRouter(connect(mapStateToProps)(Question));