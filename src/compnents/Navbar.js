import React, { Component } from 'react';
import logo from './img/logo.png';

export default class Navbar extends Component {
  render() {
    return (
        <div>
        <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
            News 24
          </a>
        </div>
      </nav>
        </div>
    )
  }
}
