import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import ContactData from "./ContactData/ContactData";

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { loading: false };
        this.checkoutContinueHandler = this.checkoutContinueHandler.bind(this);
        this.checkoutCancelHandler = this.checkoutCancelHandler.bind(this);
    }

    checkoutContinueHandler() {
        this.props.history.replace("/checkout/contact-data");
    }

    checkoutCancelHandler() {
        this.props.history.goBack();
    }

    render() {
        let summary = (
            <div>
                {this.props.ingredients ? (
                    <CheckoutSummary
                        ingredients={this.props.ingredients}
                        checkoutContinued={this.checkoutContinueHandler}
                        checkoutCancelled={this.checkoutCancelHandler}
                    />
                ) : (
                    <Spinner />
                )}
                {!this.state.loading ? (
                    <Route
                        path={`${this.props.match.url}/contact-data`}
                        component={ContactData}
                    />
                ) : (
                    <Spinner />
                )}
            </div>
        );
        if (this.props.purchased) {
            summary = <Redirect to="/" />;
        }
        return summary;
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burger.ingredients,
        purchased: state.order.purchased,
    };
};

export default connect(mapStateToProps)(Checkout);
