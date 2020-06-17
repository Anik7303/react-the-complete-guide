import React from "react";
import Radium from "radium";
import CssClass from "./Person.css";
// import "./Person.css";

const person = (props) => {
    return (
        <div className={CssClass.Person}>
            <p onClick={props.click}>
                I'm a {props.name} and I am {props.age} years old!
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changeName} value={props.name} />
        </div>
    );
};

// class Person extends Component {
//     render() {
//         return (
//             <p class={this.props.className}>
//                 I'm a {this.props.name} and I am{" "}
//                 {Math.floor(Math.random() * 30 + 70)} years old!
//             </p>
//             <p>{props.children}</p>
//         );
//     }
// }

export default Radium(person);
// export default Person;
