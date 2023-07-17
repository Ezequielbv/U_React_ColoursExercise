import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./BoxContainer.css";

class BoxContainer extends Component {
  static defaultProps = {
    numBoxes: 18,
    allColors: ["purple", "magenta", "violet", "pink"]
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <ColorBox colors={this.props.allColors}/>
    ));
    return <div className="BoxContainer">{boxes}</div>;
  }
}

export default BoxContainer;
