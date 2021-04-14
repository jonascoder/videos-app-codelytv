import React, { Component } from "react";
import ReactDOM             from "react-dom";

import "./styles.css";

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
  }
  componentDidCatch(error, info) {
    console.log("ERROR");
    this.setState({ error: info.componentStack });
  }
  render() {
    if (this.state.error) return <div>{this.state.error}</div>;
    return this.props.children;
  }
}

class Example01 extends Component {
  constructor(props) {
    super(props);
    console.log(" Constructor ");
    this.state = {
      nUpdated: 0
    };
  }
  componentDidUpdate(prevProps) {
    console.log(" - ComponenDidUpdate prop:", this.props.update);
    if (this.props.update !== prevProps.update && this.props.update === "si") {
      console.log(" - ComponendDidUpdate [UPDATED ]");
      this.setState({ nUpdated: this.state.nUpdated + 1 });
    }
  }
  componentDidMount() {
    console.log(" - ComponentDidMount");
  }

  render() {
    console.log(" ## RENDER ##");
    return (
      <div>
        {" "}
        Component 1 - prop: {this.props.update} - state.nUpdated:
        {this.state.nUpdated}{" "}
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update: "no"
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleUpdateFalse = this.handleUpdateFalse.bind(this);
    this.handleUpdateMaybe = this.handleUpdateMaybe.bind(this);
    this.handleUnmount = this.handleUnmount.bind(this);
  }

  handleUpdate() {
    this.setState({ update: "si" });
  }
  handleUpdateFalse() {
    this.setState({ update: "va a ser que no" });
  }
  handleUpdateMaybe() {
    this.setState({ update: "sep" });
  }
  handleUnmount() {
    this.setState({ update: "unmount" });
  }
  render() {
    return (
      <div className="App">
        <Error>
          <h1> Example Life Cycle React</h1>
          <Example01 update={this.state.update} />
          <p>
            <button onClick={this.handleUpdate}> Update </button>
            <button onClick={this.handleUpdateFalse}> False Update </button>
          </p>
        </Error>
      </div>
    );
  }
}