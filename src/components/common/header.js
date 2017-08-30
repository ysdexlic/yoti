import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-left">
            <div className="navbar-brand">
              <div className="icon icon-logo"></div>
            </div>
          </div>
          <div className="navbar-right">
            <div className="connection">
              <p className="p3">Connected</p>
              <div className="icon-connect-on"></div>
            </div>
            <div className="photo">
              <img className="selfie" src="/assets/selfie.png"/>
            </div>
          </div>
        </div>
      </nav>

    )
  }
}
