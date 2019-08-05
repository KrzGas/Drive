import React, { Component } from "react";
import ReactDom from "react-dom";
import { HashRouter } from "react-router-dom";
import { Header } from "./Components/Header/Header";
import { MainWindow } from "./Components/MainWindow/MainWindow";
import { Navigation } from "./Components/Navigation/Navigation";
import { Footer } from "./Components/Footer/Footer";
import "../scss/style.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Header />
        <Navigation />
        <MainWindow />
        <Footer />
      </HashRouter>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
  ReactDom.render(<App />, document.querySelector("#app"));
});
