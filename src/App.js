import React, { Component } from "react";
import ReactDom from "react-dom";
import { HashRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { Navigation } from "./Components/Navigation/Navigation";
import { Home } from "./Components/Home/Home";
import { Articles } from "./Components/Articles/Articles";
import { Video } from "./Components/Video/Video";
import { Quiz } from "./Components/Quiz/Quiz";
// import { Login } from "./Components/Login/Login";
import { Footer } from "./Components/Footer/Footer";
import "../scss/style.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Header />
        <Navigation />
        <Home />
        <Articles />
        <Video />
        <Quiz />
        <Footer />
      </HashRouter>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});
