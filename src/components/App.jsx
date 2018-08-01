import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { getInitialDataAsync } from '../actions/shared';
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Question from './Question'
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import ErrorPage from './ErrorPage';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(getInitialDataAsync());
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>

          { this.props.authedUser && <Nav /> }

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/questions/:question_id' component={Question} />
            <Route path='/new' component={NewQuestion} />
            <Route path='/leaders' component={LeaderBoard} />
            <Route component={ErrorPage} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);