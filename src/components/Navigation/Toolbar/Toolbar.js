import React from "react";

import CssClass from "./Toolbar.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NagivationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => (
    <header className={CssClass.Toolbar}>
        <DrawerToggle clicked={props.drawrToggleClicked} />
        <div className={CssClass.Logo}>
            <Logo />
        </div>
        <nav className={CssClass.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
