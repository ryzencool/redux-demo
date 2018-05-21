import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostLogin from "./components/PostLogin";
import { Provider } from "react-redux";
import { store } from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostLogin />
        </div>
      </Provider>
    );
  }
}

export default App;
