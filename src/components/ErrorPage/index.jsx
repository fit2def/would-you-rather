import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './ErrorPage.css';

class ErrorPage extends Component {

  componentDidMount() {
    const { authedUser, history } = this.props;

    !authedUser && history.push('/login');

    if (history[history.length - 2] === '/error')
      history.push('/');
  }

  render() {
    return (
      <div className='ErrorPage'>
        <h1>ERROR</h1>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default withRouter(connect(mapStateToProps)(ErrorPage));