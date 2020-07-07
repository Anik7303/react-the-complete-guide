import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import ContactData from "./ContactData/ContactData";

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     ingredients: null,
        //     price: 0,
        //     loading: false,
        // };
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

    // setData() {
    //     const query = new URLSearchParams(this.props.location.search);
    //     const ingredients = {};
    //     let price = 0;
    //     for (const entry of query.entries()) {
    //         if (entry[0] === "price") {
    //             price = Number.parseFloat(entry[1], 10);
    //         } else {
    //             ingredients[entry[0]] = Number.parseInt(entry[1], 10);
    //         }
    //     }
    //     this.setState({ ingredients: ingredients, price: price });
    // }

    render() {
        return (
            <div>
                {/* {this.state.ingredients ? ( */}
                {this.props.ingredients ? (
                    <CheckoutSummary
                        // ingredients={this.state.ingredients}
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
                        // render={() => (
                        //     <ContactData
                        //         // ingredients={this.state.ingredients}
                        //         ingredients={this.props.ingredients}
                        //         // price={this.state.price}
                        //         price={this.props.price}
                        //     />
                        // )}
                        component={ContactData}
                    />
                ) : (
                    <Spinner />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { ingredients: state.ingredients };
};

export default connect(mapStateToProps)(Checkout);
