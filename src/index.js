import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

function About() {
  return <div className="App">THIS IS THE ABOUT PAGE</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>

      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>,
  rootElement
);
