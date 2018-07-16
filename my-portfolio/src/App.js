import React, { Component } from "react";
import Layout from "./Components/Layout";
import "./App.css";
import { BrowserRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    ); 
  }
}

export default App;
