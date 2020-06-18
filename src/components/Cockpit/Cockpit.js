import React from "react";
import CssClass from "./Cockpit.css";

const cockpit = (props) => {
    const assignedClasses = [];
    let btnStyle = CssClass.btn;
    if (props.showPersons) {
        btnStyle = [btnStyle, CssClass.red].join(" ");
    }
    if (props.personsLength <= 2) {
        assignedClasses.push(CssClass.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(CssClass.bold);
    }

    return (
        <div className={CssClass.Cockpit}>
            <h1>Hi, I'm a React App</h1>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button className={btnStyle} onClick={props.togglePersons}>
                {props.show ? "Hide" : "Show"}
            </button>
        </div>
    );
};

export default cockpit;
