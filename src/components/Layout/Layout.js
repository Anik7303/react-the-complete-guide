import React from "react";

import CssClass from "./Layout.css";
import Aux from "../../hoc/Auxiliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

const layout = (props) => (
    <Aux>
        <Toolbar />
        {/* <div> SideDrawer, Backdrop</div> */}
        <main className={CssClass.Content}>{props.children}</main>
    </Aux>
);

export default layout;
