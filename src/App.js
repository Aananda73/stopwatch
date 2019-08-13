import React from "react";
import Timeinput from "./TimeInput";
import Stopwatch from "./Stopwatch";

class App extends React.Component {
  state = {
    time: 100,
    sec: null
  };

  minus = () => {
    let temp = this.state.time;
    temp -= 1;
    this.setState({
      time: temp
    });
  };

  start = () => {
    setInterval(() => {
      if (this.state.time > 0) {
        this.minus();
      }
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      sec: e.target.value
    });
  };

  handleSumbit = e => {
    e.preventDefault();
    this.setState({
      time: this.state.sec,
      sec: null
    });
  };

  render() {
    return (
      <div>
        <h1
          onClick={this.start}
          style={{ textAlign: "center", margin: "auto" }}
        >
          Timer App
        </h1>
        <Timeinput
          handleSumbit={this.handleSumbit}
          sec={this.state.sec}
          handleChange={this.handleChange}
        />
        <Stopwatch time={this.state.time} />
      </div>
    );
  }
}

export default App;
