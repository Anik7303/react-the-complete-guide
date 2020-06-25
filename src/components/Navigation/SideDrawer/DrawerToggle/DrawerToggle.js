import React from "react";

import CssClass from "./DrawerToggle.css";

const drawerToggle = (props) => (
    <div
        className={[CssClass.ToggleBtn, CssClass.MobileOnly].join(" ")}
        onClick={props.clicked}
    >
        <span></span>
        <span></span>
        <span></span>
    </div>
);

export default drawerToggle;
