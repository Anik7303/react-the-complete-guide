import React from "react";

import CssClass from "./Layout.css";
import Aux from "../../hoc/Auxiliary";

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={CssClass.Content}>{props.children}</main>
    </Aux>
);

export default layout;
