import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/login';
import './Logout.css';

function Logout({ dispatch, history }){
  return (
    <a className='Logout'
      onClick={() => {
        dispatch(logout());
        history.push('/login');
      }}>LOGOUT</a>
  );
}

export default withRouter(connect()(Logout));