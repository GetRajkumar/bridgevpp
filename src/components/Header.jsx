import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import './HeaderStyle.css';


export default class Header extends Component {
  render() {
    return (<div>

      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href=""><img className="logo" alt="logo" src={Logo} /></a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><NavLink exact activeClassName="active" to="/">DashBoard </NavLink></li>
              <li><NavLink activeClassName="active" to="/addbill">Add Bill</NavLink></li>
              <li><NavLink activeClassName="active" to="/billstatus">Bill Status</NavLink></li>
              <li><NavLink activeClassName="active" to="/vendors">Vendors</NavLink></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">John Newton<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="">Profile</a></li>
                  <li><a href="">Settings</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="" >Log Out</a></li>

                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    );
  }
}