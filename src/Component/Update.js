import React from "react";
import { ReactDOM } from "react";

class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
  }
  // static getDerivedStateFromProps(props, state) {
  //   return {
  //     color: props.color,
  //   };
  // }

  // shouldComponentUpdate() {
  //   return true;
  // }

  onChange = () => {
    console.log("called");
    this.setState({
      color: "black",
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "Before the update, the color was " + prevState.color;
  }

  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
      "After the update, the color is " + this.state.color;
  }

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.color}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
        <button onClick={this.onChange}>Change color</button>
      </div>
    );
  }
}

export { Update };
