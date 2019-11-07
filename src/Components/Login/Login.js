import React, { Component } from "react";
import { SignUp } from "./SignUp";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      show: false
    }
  }

  showPanel = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <section id="Login">
        <i className="fa fa-user" onClick={this.showPanel}></i>
        {this.state.show && <SignUp />}
      </section>
    );
  }
  
};

export { Login };
