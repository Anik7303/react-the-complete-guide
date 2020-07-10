import React from "react";

import CssClass from "./Button.css";

const button = (props) => (
    <button
        className={[CssClass.Button, CssClass[props.btnType]].join(" ")}
        onClick={props.clicked}
        disabled={props.disabled}
    >
        {props.children}
    </button>
);

export default button;
