import React from "react";
import "./Person.css";

const person = (props) => {
    const rnd = Math.random();
    if (rnd > 0.8) {
        throw new Error("Something went wrong");
    }
    return (
        <div className="Person">
            <p className={props.className} onClick={props.click}>
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

export default person;
// export default Person;
