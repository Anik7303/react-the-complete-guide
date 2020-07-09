import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import ContactData from "./ContactData/ContactData";
import * as actions from "../../store/actions/index";

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

    componentWillUnmount() {
        this.props.resetPurchasedState();
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
        buildingBurger: state.burger.building,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetPurchasedState: () => dispatch(actions.resetPurchasedState()),
        setIngredients: () => dispatch(actions.initIngredients()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
