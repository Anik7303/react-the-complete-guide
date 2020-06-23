import React from "react";

import CssClass from "./Toolbar.css";
import Logo from "../Logo/Logo";

const toolbar = (props) => (
    <header className={CssClass.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>...</nav>
    </header>
);

export default toolbar;
