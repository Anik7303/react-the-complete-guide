import React from "react";
import { connect } from "react-redux";
// import axios from "axios";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";

import Axios from "../../axios";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as actions from "../../store/actions/index";

class BurgerBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            purchaseMode: false,
            loading: false,
        };
        this.getPurchaseState = this.getPurchaseState.bind(this);
        // this.ingredientGetSource = axios.CancelToken.source();
        // Axios.get("/ingredients.json", {
        //     cancelToken: this.ingredientGetSource.token,
        // })
        //     .then((response) => {
        //         this.props.setIngredients(response.data);
        //     })
        //     .catch((error) => error);
    }

    getPurchaseState = () => {
        // const ingredients = Object.assign({}, state.ingredients); // { ...state.ingredients };
        const ingredients = Object.assign({}, this.props.ingredients);
        const sum = Object.keys(ingredients)
            .map((key) => ingredients[key])
            .reduce((sum, value) => sum + value, 0);
        return sum > 0;
    };

    purchaseHandler = () => {
        if (this.props.isAuthenticated) {
            this.setState({
                purchaseMode: true,
            });
        } else {
            this.props.setAuthRedirectPath("/checkout");
            this.props.history.push("/auth");
        }
    };

    purchaseCancleHanlder = () => {
        this.setState({
            purchaseMode: false,
        });
    };

    purchaseContinueHandler = () => {
        this.props.history.push("/checkout");
    };

    componentDidMount() {
        if (!this.props.buildingBurger) {
            this.props.initIngredients();
        }
    }

    // componentWillUnmount() {
    //     this.ingredientGetSource.cancel();
    // }

    render() {
        const disabledInfo = { ...this.props.ingredients };
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let burgerSection = <Spinner />;
        let orderSummary = null;

        if (this.props.ingredients) {
            burgerSection = (
                <Aux>
                    <Burger ingredients={this.props.ingredients} />
                    <BuildControls
                        addIngredient={this.props.onIngredientAdd}
                        removeIngredient={this.props.onIngredientRemove}
                        disabled={disabledInfo}
                        price={this.props.price}
                        ordering={this.purchaseHandler}
                        purchasable={this.getPurchaseState()}
                        isAuth={this.props.isAuthenticated}
                    />
                </Aux>
            );
            orderSummary = (
                <OrderSummary
                    ingredients={this.props.ingredients}
                    price={this.props.price}
                    cancel={this.purchaseCancleHanlder}
                    continue={this.purchaseContinueHandler}
                />
            );
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchaseMode}
                    modalClosed={this.purchaseCancleHanlder}
                >
                    {orderSummary}
                </Modal>
                {burgerSection}
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burger.ingredients,
        price: state.burger.price,
        error: state.burger.error,
        isAuthenticated: state.auth.isAuthenticated,
        buildingBurger: state.burger.building,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initIngredients: () => dispatch(actions.initIngredients()),
        setIngredients: (ingredients) =>
            dispatch(actions.setIngredients(ingredients)),
        onIngredientAdd: (ingredient) =>
            dispatch(actions.addIngredient(ingredient)),
        onIngredientRemove: (ingredient) =>
            dispatch(actions.removeIngredient(ingredient)),
        setAuthRedirectPath: (path) =>
            dispatch(actions.setAuthRedirectPath(path)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandler(BurgerBuilder, Axios));
