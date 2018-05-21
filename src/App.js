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
          <PostLogin />
        </div>
      </Provider>
    );
  }
}

export default App;
