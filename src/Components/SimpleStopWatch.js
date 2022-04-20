import React, { Component } from "react";
import "./SimpleStopWatch.css";

class SimpleStopWatch extends Component {
  state = {
    count: 0,
    isStart: false,
  };
  startStopWatch = (number) => {
    if (number === 1) {
      this.interval = setInterval(() => {
        this.setState({
          count: this.state.count + 1,
          isStart: true,
        });
      }, 1000);
    } else if (number === -1) {
      clearInterval(this.interval);
      this.setState({
        isStart: false,
      });
    } else {
      this.setState({
        count: 0,
        isStart: false,
      });
      clearInterval(this.interval);
    }
  };

  render() {
    const { count, isStart } = this.state;
    return (
      <div className="stopwatch-container">
        <div className="stopwatch-box">
          <div className="box-header">
            <h1>React Simple StopWatch</h1>
          </div>
          <div className="box-body">
            <h1>{count}</h1>
          </div>
          <div className="box-footer">
            <div className="btn-wrapper">
              {!isStart ? (
                <button className="btn" onClick={() => this.startStopWatch(1)}>
                  Start
                </button>
              ) : (
                <button className="btn" onClick={() => this.startStopWatch(-1)}>
                  Stop
                </button>
              )}
              <button className="btn" onClick={() => this.startStopWatch(0)}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleStopWatch;
