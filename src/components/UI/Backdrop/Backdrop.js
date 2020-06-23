import React from "react";

import CssClass from "./Backdrop.css";

const backdrop = (props) =>
    props.show ? (
        <div className={CssClass.Backdrop} onClick={props.clicked}></div>
    ) : null;

export default backdrop;
