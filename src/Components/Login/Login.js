import React, { Component } from "react";
import {SignUp} from "./SignUp";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swap: true,
      show: false
    };
  }

  switchPanel = () =>{
    this.setState({
      swap: !this.state.swap
    });
  };


  render() {
    return (
      <>
      <div className={this.state.swap ? "panel__hidden": "panel__visible"}>
      {this.state.swap ? null: <SignUp />}
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
