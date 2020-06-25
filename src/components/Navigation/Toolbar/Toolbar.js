import React from "react";

import CssClass from "./Toolbar.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NagivationItems";

const toolbar = (props) => (
    <header className={CssClass.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
