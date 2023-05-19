import React, { Component } from "react";
import Counter from "./Counter";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  showCounter = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { show } = this.state;

    return (
      <div className="App" style={{textAlign: "center"}}>
        <button onClick={this.showCounter}>
          {show ? "Hide Counter" : "Show Counter"}
        </button>
        {show && <Counter />}
      </div>
    );
  }
}
