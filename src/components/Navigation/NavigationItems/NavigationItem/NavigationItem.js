import React from "react";

import CssClass from "./NavigationItem.css";

const navigationItem = (props) => (
    <li className={CssClass.NavigationItem}>
        <a href={props.link} className={props.active ? CssClass.active : null}>
            {props.children}
        </a>
    </li>
);

export default navigationItem;
