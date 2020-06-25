import React from "react";

import CssClass from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
    <ul className={CssClass.NavigationItems}>
        <NavigationItem link="/" active>
            BurgerBuilder
        </NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;
