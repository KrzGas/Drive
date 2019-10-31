import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swap: true
    };
  }

  switchPanel = () =>{
    this.setState({
      swap: !this.state.swap
    });
  }

  render() {
    return (
      <>
      <div className={this.state.swap ? "panel__hidden": "panel__visible"}>
        <button className="login__button">ZALOGUJ SIĘ</button>
        <i className="fas fa-key" />
      </div>
      <div className="panel__wrapper">
      {this.state.swap ?
        <i className="fas fa-user" onClick={this.switchPanel} />
       : 
        <i className="far fa-window-close" onClick={this.switchPanel} />
      }
      </div>
      </>
    );
  }
}

export {Login};
