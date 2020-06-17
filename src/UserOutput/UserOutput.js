import React from "react";
// import React, { Component } from "react";
import "./UserOutput.css";

const UserOutput = (props) => {
    return (
        <div className="user-output">
            <p>{props.textOne}</p>
            <p>Username: {props.username}</p>
        </div>
    );
};

// class UserOutput extends Component {
//     render() {
//         return (
//             <div className="user-output">
//                 <p>{this.props.textOne}</p>
//                 <p>Username: {this.props.username}</p>
//             </div>
//         );
//     }
// }

export default UserOutput;
