import React, { Component } from "react";
import "./App.css";
const axios = require("axios");

class App extends Component {
  state = {
    advice: "",
    err: "",
  };

  getData () {
    const response = axios.get("https://api.adviceslip.com/advice");
    response
      .then((result) => {
        const { advice } = result.data.slip;
        this.setState({
          advice,
        });
      })
      .catch((err) => {
        this.setState({
          err: "Error in retrieving data",
        });
      });
  }

  componentDidMount() {
    this.getData();
  }

  handleClick() {
    this.getData()
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.state.advice ? this.state.advice : this.state.err}
          <span onClick={this.handleClick.bind(this)} className="button">
            Give me advice
          </span>
        </div>
      </div>
    );
  }
}

export default App;
