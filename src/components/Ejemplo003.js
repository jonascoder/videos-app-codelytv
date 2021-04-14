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

class Example03 extends Component {
  constructor(props) {
    super(props);
    console.log(" Constructor ");
    this.state = {
      nUpdated: 0,
      update: "no"
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(" - getDerivedStateFromProps props:", props, " state ", state);
    if (state.update !== props.update && props.update === "si") {
      console.log(" - getDerivedStateFromProps [UPDATED ]");
      return {
        nUpdated: state.nUpdated + 1,
        update: props.update
      };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(" - shouldComponentUpdate ", nextProps);
    if (nextProps.update === "si" || nextProps.update === "sep") return true;
    return false;
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
  componentWillUnmount() {
    console.log(" @@ ComponentWillUnmount @@ ");
  }
  render() {
    console.log(" ## RENDER ##");
    return (
      <div>
        {" "}
        Component 3 - prop: {this.props.update} - state.nUpdated:
        {this.state.nUpdated}{" "}
      </div>
    );
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      update:"no"
    }
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleUpdateFalse = this.handleUpdateFalse.bind(this);
    this.handleUpdateMaybe = this.handleUpdateMaybe.bind(this);
    this.handleUnmount = this.handleUnmount.bind(this);
  }

  handleUpdate(){
    this.setState({update:"si"});
  }
  handleUpdateFalse() {
    this.setState({ update: "no" });
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
          {this.state.update !== 'unmount' && (<Example03 update={this.state.update} />)}
           <p><button onClick={this.handleUpdate} > SI </button>
          <button onClick={this.handleUpdateFalse} > NO </button>
          <button onClick={this.handleUpdateMaybe} > SEP </button>
          <button onClick={this.handleUnmount} > Unmount </button></p>
        </Error>
      </div>
    );
  }
}