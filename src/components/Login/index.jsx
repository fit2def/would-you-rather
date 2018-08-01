import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { login } from '../../actions/login'
import './Login.css';


class Login extends Component {

  state = {
    selectedUser : null
  }

  setSelectedUser(id){
    this.setState(() => ({
      selectedUser: id
    }))
  }

  submit(e){
    e.preventDefault();
    this.props.dispatch(login(this.state.selectedUser));
    this.props.history.goBack();
  }

  render() {
    const { users } = this.props;
    const entries = Object.entries(users);

    return (
      <div className="Login">
        <h2>WOULD YOU RATHER?</h2>
        <form
          className='login-form'
          onSubmit={(e) => this.submit(e)}>
          <select
            defaultValue={''}
            onChange={(e) => this.setSelectedUser(e.target.value)}>
            <option
              value=''
              disabled
              hidden
              key={0}>Choose User
            </option>
            {entries.map(([id, user]) => (
              <option key={id} value={id}>{user.name}</option>
            ))}
          </select>
          <button
            disabled={!this.state.selectedUser}
            type='submit'>LOGIN
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default withRouter(connect(mapStateToProps)(Login));