// import React from "react";
import React, { Component } from "react";

class movieForm extends Component {
  handleSave = () => {
    this.props.history.push("/movie");
  };

  render() {
    const { id } = this.props.match.params;

    return (
      <div>
        <h1 className="form-heading"> movie form - {id} </h1>
        <button onClick={this.handleSave} className="btn btn-primary">
          Save
        </button>
      </div>
    );
  }
}

export default movieForm;
