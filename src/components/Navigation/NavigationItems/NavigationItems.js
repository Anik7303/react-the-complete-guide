import React from "react";
import { connect } from "react-redux";

import CssClass from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => (
    <ul className={CssClass.NavigationItems}>
        <NavigationItem link="/">BurgerBuilder</NavigationItem>
        {props.isAuthenticated ? (
            <React.Fragment>
                <NavigationItem link="/orders">Orders</NavigationItem>
                <NavigationItem link="/logout">Logout</NavigationItem>
            </React.Fragment>
        ) : (
            <NavigationItem link="/auth">Authentication</NavigationItem>
        )}
    </ul>
);

const mapPropsToState = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

export default connect(mapPropsToState)(navigationItems);
