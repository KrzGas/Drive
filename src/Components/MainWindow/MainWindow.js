import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Articles } from "./Articles/Articles";
import { Video } from "./Video/Video";
import { Quiz } from "./Quiz/Quiz";
import { Login } from "./Login/Login";

export const MainWindow = () => {
  return (
    <main className="main__window">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/articles" component={Articles} />
        <Route path="/video" component={Video} />
		    <Route path="/quiz" component={Quiz} />
		    <Route path="/login" component={Login} />
      </Switch>
    </main>
  );
};
