import React from "react";
import { Child } from "./Child";

class Unmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  delHeader = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    let header;
    if (this.state.show) {
      header = <Child />;
    }

    return (
      <div>
        {header}
        <button onClick={this.delHeader} type="button">
          Delete Component
        </button>
      </div>
    );
  }
}

export { Unmount };
