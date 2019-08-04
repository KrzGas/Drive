import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const MenuElements = [
  {
    path: "/",
    name: "Home",
    icon: "fas fa-home"
  },
  {
    path: "/articles",
    name: "Artykuły",
    icon: "far fa-newspaper"
  },
  {
    path: "/wideo",
    name: "Wideo",
    icon: "far fa-file-video"
  },
  {
    path: "/quiz",
    name: "Quiz",
    icon: "far fa-question-circle"
  },
  {
    path: "/login",
    name: "Zaloguj się",
    icon: "fas fa-user"
  }
];

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      swap: false
    };
  }

  switchMenu = () => {
    this.setState({
      swap: !this.state.swap
    });
  };

  render() {
    return (
      <nav>
        <div className="menu__wrapper">
        {this.state.swap ? (
          <>
          <i className="fas fa-bars" onClick={this.switchMenu} />
          <span>Pokaż menu</span>
          </>
        ) : 
        <>
          <i className="far fa-window-close" onClick={this.switchMenu} />
          <span>Schowaj menu</span>
          </>
        }
        </div>
        <ul className={this.state.swap ? "menu__hidden": "menu__visible"}>
          {MenuElements.map(item => (
            <li key={item.path}>
              <NavLink exact to={item.path}>
                <i className={item.icon} />
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export { Navigation };
