import React, { Component, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const MenuElements = [
  { path: "Home", name: "Home" },
  { path: "Articles", name: "Artykuły" },
  { path: "Video", name: "Wideo" },
  { path: "Quiz", name: "Quiz" },
  { path: "Login", name: "Login" }
];

const Navigation = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <>
      <nav className={hidden ? "menu__hidden" : "menu__visible"}>
        <ul>
          {MenuElements.map(item => (
            <li key={item.path}>
              <Link key={item.name} to={item.path}spy={true} smooth={true} offset={-50} duration={750}>
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu__wrapper">
        {hidden ? (
          <i className="fas fa-bars" onClick={() => setHidden(false)} />
        ) : (
          <i className="far fa-window-close" onClick={() => setHidden(true)} />
        )}
      </div>
    </>
  );
};

export { Navigation };
