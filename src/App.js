import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Logout from "./components/Logout/Logout";
import * as actions from "./store/actions/index";
import asyncComponent from "./hoc/asyncComponent/asyncComponent";

const Checkout = asyncComponent(() => import("./containers/Checkout/Checkout"));
const Orders = asyncComponent(() => import("./containers/Orders/Orders"));
const Auth = asyncComponent(() => import("./containers/Auth/Auth"));

class App extends Component {
    constructor(props) {
        super(props);
        this.props.checkAuthStatus();
    }

    render() {
        let routes = (
            <Switch>
                <Route exact path="/" component={BurgerBuilder} />
                <Route exact path="/auth" component={Auth} />
                <Redirect to="/" />
            </Switch>
        );
        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route exact path="/" component={BurgerBuilder} />
                    <Route path="/checkout" component={Checkout} />
                    <Route exact path="/orders" component={Orders} />
                    <Route exact path="/logout" component={Logout} />
                    <Redirect to="/" />
                </Switch>
            );
        }
        return (
            <div>
                <Layout>{routes}</Layout>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuthStatus: () => dispatch(actions.checkAuthStatus()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
