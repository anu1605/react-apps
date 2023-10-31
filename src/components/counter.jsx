import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div
        style={{
          width: "fit-content",
          height: "fit-content",
          marginLeft: 0,
          paddingTop: 30,
        }}
        className="container text-center"
      >
        <div style={{ fontSize: 23 }} className="row">
          <div style={{ width: 100, margin: "auto" }} className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary m-2"
              disabled={this.props.counter.value === 0}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter)}
              className="btn btn-secondary btn-danger"
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-lg badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
