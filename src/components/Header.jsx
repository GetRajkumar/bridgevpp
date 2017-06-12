import React, { Component } from 'react';
import Logo from '../images/logo.png';
import './HeaderStyle.css';
import { Link } from 'react-router';
import { connect } from 'react-redux';


class Header extends Component {
  renderLinks(){
if(this.props.authenticated){
  return(
 <ul className="nav navbar-nav">
              <li><Link activeClassName="active" to="Dashboard">DashBoard </Link></li>
              <li><Link activeClassName="active" to="/addbill">Add Bill</Link></li>
              <li><Link activeClassName="active" to="/billstatus">Bill Status</Link></li>
              <li><Link activeClassName="active" to="/vendors">Vendors</Link></li>
      </ul>
       );
           }
    

  }
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
            
              {this.renderLinks()}
           
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">John Newton<span className="caret"></span></a>
                <ul className="dropdown-menu">
      
                  <li><Link to="/signout">Sign Out</Link></li>

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

function mapStateToProps(state){
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps) (Header);