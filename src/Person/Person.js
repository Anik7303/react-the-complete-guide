import React from "react";
import CssClass from "./Person.css";

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

export default person;
