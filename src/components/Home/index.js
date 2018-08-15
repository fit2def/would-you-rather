import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToggleButton from '../ToggleButton'
import QuestionPreview from '../QuestionPreview'
import './Home.css';

class Home extends Component {

  state = {
    showAnswered: false
  };

  toggleShown() {
    this.setState(({ showAnswered }) => ({
      showAnswered: !showAnswered
    }));
  }

  render() {

    const { authedUser, questions } = this.props;

    const answered = q =>
      [...q.optionOne.votes, ...q.optionTwo.votes].includes(authedUser);

    const predicate = this.state.showAnswered
      ? answered
      : q => !answered(q);

    const shown = Object.entries(questions)
      .map(([_, q]) => q)
      .filter(predicate)
      .sort((q1, q2) => q2.timestamp - q1.timestamp);

    return (
      <div className='Home'>

          <div className='toggle-buttons'>
            <ToggleButton
              label={'Unanswered Questions'}
              on={!this.state.showAnswered}
              toggle={() => this.toggleShown()} />
            <ToggleButton
              label={'Answered Questions'}
              on={this.state.showAnswered}
              toggle={() => this.toggleShown()} />
          </div>

        <div className='preview-container'>

          {!shown.length &&
            <div style={{ padding: '1.5em', textAlign: 'center' }}>
              <h2>You've answered 'em all!</h2>
              <h5>(Why don't you ask more?)</h5>
            </div>}

          {shown.map(q =>
            (<QuestionPreview key={q.id} question={q} />)
          )}

        </div>

      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions }) {
  return {
    authedUser,
    questions
  };
}

export default connect(mapStateToProps)(Home);