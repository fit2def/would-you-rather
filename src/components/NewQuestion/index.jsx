import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addQuestionAsync } from '../../actions/questions';
import './NewQuestion.css';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: ''
  }

  componentDidMount() {
    !this.props.authedUser && this.props.history.push('/login');
  }

  changeOption(option, text){
    this.setState((prevState) => ({
      ...prevState,
      [option]: text
    }));
  }

  addQuestion(e){
    e.preventDefault();
    const question = {
      ...this.state,
      author: this.props.authedUser
    }
    this.props.dispatch(addQuestionAsync(question));
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="NewQuestion">
        <h1>Create new Question</h1>
        Would you rather...
        <form onSubmit={(e) => this.addQuestion(e)}>
          <input
            maxLength={50}
            onChange={(e) => this.changeOption('optionOneText', e.target.value)} />
          <p>OR</p>
          <input
            maxLength={50}
            onChange={(e) => this.changeOption('optionTwoText', e.target.value)} />
          <input
            disabled={!this.state.optionOneText || !this.state.optionTwoText }
            type='submit'
            value='Submit' />
        </form>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }){
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(NewQuestion));