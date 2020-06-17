import React from "react";
// import React, { Component } from "react";
import "./UserInput.css";

const UserInput = (props) => {
    const divStyle = {
        backgroundColor: "#ccc",
        width: "400px",
        border: "2px solid yellowgreen",
        padding: "20px",
    };

    return (
        <div className="user-input" style={divStyle}>
            <input
                type="text"
                onChange={props.updateUsername}
                value={props.username}
            />
        </div>
    );
};

// class UserInput extends Component {
//     render() {
//         const divStyle = {
//             backgroundColor: "#ccc",
//             width: "400px",
//             border: "2px solid yellowgreen",
//             padding: "20px",
//         };
//         return (
// <div className="user-input" style={divStyle}>
//     <input
//         type="text"
//         onChange={this.props.updateUsername}
//         value={this.props.username}
//     />
// </div>
//         );
//     }
// }

export default UserInput;
