import React from "react";
import { ReactDOM } from "react";
import "./App.css";

// class Welcome extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 5,
//     };
//   }
//   render() {
//     const { name } = this.props;
//     const { count } = this.state;
//     return (
//       <div className="app">
//         <h1>{count}</h1>
//         <button
//           onClick={() => {
//             this.setState({
//               count: count + 1,
//             });
//             console.log(count);
//           }}
//         >
//           Increment
//         </button>
//         <button
//           onClick={() => {
//             this.setState({
//               count: count - 1,
//             });
//             console.log(count);
//           }}
//         >
//           Decreent
//         </button>
//       </div>
//     );
//   }
// }

// // function HelloWorld(props) {
// //   const { name } = props;
// //   return <h1>Hello {name}!</h1>;
// // }
// export { Welcome };

class Header extends React.Component {
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

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        color: "black",
      });
      console.log("black");
    }, 2000);
  }

  render() {
    return <h1>My Favorite Color is {this.state.color}</h1>;
  }
}

export { Header };
