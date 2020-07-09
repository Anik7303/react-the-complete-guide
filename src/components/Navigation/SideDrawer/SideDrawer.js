import React from "react";

import CssClass from "./SideDrawer.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxiliary/Auxiliary";

const sideDrawer = (props) => {
    let attachClasses = [CssClass.SideDrawer, CssClass.Close];
    if (props.open) {
        attachClasses = [CssClass.SideDrawer, CssClass.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachClasses.join(" ")}>
                <div className={CssClass.Logo}>
                    <Logo />
                </div>
                <nav onClick={props.closed}>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;
