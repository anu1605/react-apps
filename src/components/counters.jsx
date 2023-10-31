import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            width: "fit-content",
            height: "fit-content",
            marginLeft: 0,
            paddingTop: 30,
          }}
          className="container text-center"
        >
          <div className="row">
            <div className="col">
              <button onClick={this.props.onReset} className="btn btn-primary">
                Reset
              </button>
            </div>
          </div>
        </div>

        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            onIncrement={this.props.onIncrement}
            onDecrement={this.props.onDecrement}
            onDelete={this.props.onDelete}
            onReset={this.props.onDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
