import React, { Component } from "react";
import PropTypes from "prop-types";
import CssClass from "./Person.css";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
    constructor(props) {
        super(props);
        console.log("[Person.js] constructor");
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    // static getDerivedStateFromProps(props, state) {
    // console.log("[Person.js] getDerivedStateFromProps", props);
    // return state;
    // }

    componentDidMount() {
        console.log("[Person.js] componentDidMount");
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Person.js] shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        const snapshot = null;
        console.log("[Person.js] getSnapshotBeforeUpdate");
        return snapshot;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[Person.js] componentDidUpdate", snapshot);
    }

    componentWillUnmount() {
        console.log("[Person.js] componentWillUnmount");
    }

    componentDidCatch(error, info) {
        console.log("[Person.js] componentDidCatch");
    }

    render() {
        console.log("[Person.js] render");
        return (
            <React.Fragment>
                <div className={CssClass.Person}>
                    {/* <AuthContext.Consumer>
                        {(context) =>
                            context.authenticated ? (
                                <p>Authenticated</p>
                            ) : (
                                <p>Please log in!</p>
                            )
                        }
                    </AuthContext.Consumer> */}
                    {this.context.authenticated ? (
                        <p>Authenticated</p>
                    ) : (
                        <p>Please log in!</p>
                    )}

                    <p onClick={this.props.click}>
                        I'm a {this.props.name} and I am {this.props.age} years
                        old!
                    </p>
                    <p>{this.props.children}</p>
                    <input
                        ref={this.inputElementRef}
                        type="text"
                        onChange={this.props.changeName}
                        value={this.props.name}
                    />
                </div>
            </React.Fragment>
        );
    }
}

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    click: PropTypes.func,
    changeName: PropTypes.func,
};

export default Person;

// const person = (props) => {
//     console.log("[Person.js] rendering...");
//     return (
//         <div className={CssClass.Person}>
//             <p onClick={props.click}>
//                 I'm a {props.name} and I am {props.age} years old!
//             </p>
//             <p>{props.children}</p>
//             <input type="text" onChange={props.changeName} value={props.name} />
//         </div>
//     );
// };

// export default person;
