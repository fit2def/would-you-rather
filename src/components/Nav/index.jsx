import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import UserInfo from '../UserInfo';
import Logout from '../Logout';
import './Nav.css';

function Nav({ history }) {

  const path = history.location.pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <NavLink
              to='/'
              className={path === '/' || path.includes('questions') ? 'active-link' : 'non-active-link'} >
              HOME
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to='/new'
              className={path === '/new' ? 'active-link' : 'non-active-link'}>
              NEW QUESTION
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to='/leaders'
              className={path === '/leaders' ? 'active-link' : 'non-active-link'}>
              LEADERBOARD
            </NavLink>
          </li>

        </ul>
        <UserInfo />
        <Logout />
      </div>
    </nav>
  );
}

export default withRouter(Nav);