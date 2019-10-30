import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const MenuElements = [
  {
    path: "Home",
    name: "Home"
  },
  {
    path: "Articles",
    name: "Artykuły"
  },
  {
    path: "Video",
    name: "Wideo"
  },
  {
    path: "Quiz",
    name: "Quiz"
  },
  {
    path: "Login",
    name: "Zaloguj się"
  }
];

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swap: false
    };
  }

  switchMenu = () =>{
    this.setState({
      swap: !this.state.swap
    });
  }

  render() {
    return (
      <>
      <nav className={this.state.swap ? "menu__hidden": "menu__visible"}>
        <ul >
          {MenuElements.map(item => (
            <li key={item.path}>
              <Link key={item.name} to={item.path} spy={true} smooth={true}offset={-50} duration={750}>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu__wrapper">
      {this.state.swap ?
        <i className="fas fa-bars" onClick={this.switchMenu} />
       : 
        <i className="far fa-window-close" onClick={this.switchMenu} />
      }
      </div>
      </>
    );
  }
}

export { Navigation };
