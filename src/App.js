import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
    originalArray: null,
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };

  handdleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  handleDelete = (counter) => {
    if (this.state.originalArray === null) {
      const originalArray = [...this.state.counters];
      this.setState({ originalArray });
    }
    const counters = [...this.state.counters].filter((c) => c.id != counter.id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [...this.state.originalArray].map((counter) => {
      let newobject = { ...counter };
      newobject.value = 0;
      return newobject;
    });

    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          count={
            this.state.counters.filter((counter) => counter.value > 0).length
          }
        />
        <main
          style={{
            marginLeft: 20,
            paddingTop: 20,
          }}
          role="main"
          className="container"
        >
          <Counters
            onIncrement={this.handleIncrement}
            onDecrement={this.handdleDecrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
