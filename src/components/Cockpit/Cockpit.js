import React from "react";
import CssClass from "./Cockpit.css";

const cockpit = (props) => {
    // runs only once
    // React.useEffect(() => {
    //     console.log("[Cockpit.js] useEffect (1) - only when mounted");
    //     const timer = setTimeout(() => alert("Save data to cloud"));
    //     return () => {
    //         console.log("[Cockpit.js] cleanup work in useEffect (1)");
    //         clearTimeout(timer);
    //     };
    // }, []);

    // React.useEffect(() => {
    //     console.log(
    //         "[Cockpit.js] useEffect (2) - only when personsLength change"
    //     );
    //     return () => {
    //         console.log("[Cockpit.js] cleanup work in useEffect (2)");
    //     };
    // }, [props.personsLength]);

    React.useEffect(() => {
        console.log("[Cockpit.js] 3rd useEffect");
        return () => {
            console.log("[Cockpit.js] cleanup work in 3rd useEffect");
        };
    });

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
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(" ")}>This is really working!</p>
            <button className={btnStyle} onClick={props.togglePersons}>
                {props.show ? "Hide" : "Show"}
            </button>
        </div>
    );
};

export default React.memo(cockpit);
