import React, { Component } from "react";
import "./App.css";
import apoc from "./Assets/Apoc.jfif";
import derp from "./Assets/Derp.jfif";
import jack from "./Assets/Jack.jpg";
import Navbar from "./Nav.js";
import Routes from "./Routes.js";

class App extends Component {
  static defaultProps = {
    dogs: [
      {
        name: "Apoc",
        age: 5,
        src: apoc,
        facts: [
          "Apoc loves eating popcorn.",
          "Apoc is a terrible guard dog.",
          "Apoc wants to cuddle with you!"
        ]
      },
      {
        name: "Derp",
        age: 3,
        src: derp,
        facts: [
          "Derp has soooo much energy!",
          "Derp is highly intelligent.",
          "Derp loves people more than dogs."
        ]
      },
      {
        name: "Jack",
        age: 4,
        src: jack,
        facts: [
          "Jack is not the brightest dog",
          "Jack does not like walks or exercise.",
          "Jack loves eating food."
        ]
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Navbar dogs={this.props.dogs} />
        <Routes dogs={this.props.dogs} />
      </div>
    );
  }
}

export default App;