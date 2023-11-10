// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";

// class Person extends Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h3>
//           Name: {this.props.name}, Age: {this.props.age}
//         </h3>
//         <p>{this.props.children}</p>
//       </div>
//     );
//   }
// }

let Person = (props) => {
    console.log(props);
    return (
        <div>
            <h3>
            Name: {props.name}, Age: {props.age}
            </h3>
            <p>{props.children}</p>
        </div>
    );
}
export default Person;
