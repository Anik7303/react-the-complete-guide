import React from "react";

import CssClass from "./Layout.css";
import Aux from "../Auxiliary/Auxiliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends React.Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerOpenHandler = () => {
        this.setState({ showSideDrawer: true });
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    render() {
        return (
            <Aux>
                <Toolbar drawrToggleClicked={this.sideDrawerOpenHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className={CssClass.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
