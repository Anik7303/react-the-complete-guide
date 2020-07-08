import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./components/Logout/Logout";

class App extends Component {
    render() {
        return (
            <div>
                <Layout>
                    <Switch>
                        <Route exact path="/" component={BurgerBuilder} />
                        <Route path="/checkout" component={Checkout} />
                        <Route exact path="/orders" component={Orders} />
                        <Route exact path="/auth" component={Auth} />
                        <Route exact path="/logout" component={Logout} />
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
