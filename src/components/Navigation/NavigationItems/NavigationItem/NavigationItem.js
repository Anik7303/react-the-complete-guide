import React from "react";
import { NavLink } from "react-router-dom";

import CssClass from "./NavigationItem.css";

const navigationItem = (props) => (
    <li className={CssClass.NavigationItem}>
        <NavLink exact to={props.link} activeClassName={CssClass.active}>
            {props.children}
        </NavLink>
    </li>
);

export default navigationItem;
