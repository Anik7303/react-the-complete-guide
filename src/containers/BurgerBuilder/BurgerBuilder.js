import React from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";

import Axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
};

class BurgerBuilder extends React.Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchaseMode: false,
        loading: false,
    };

    updatePurchangeseState = (ingredients) => {
        // const sum = Object.keys(ingredients)
        //     .map((key) => ingredients[key])
        //     .reduce((sum, value) => sum + value, 0);
        // this.setState({
        //     purchasable: sum > 0,
        // });
        this.setState((state) => {
            const ingredients = Object.assign({}, state.ingredients); // { ...state.ingredients };
            const sum = Object.keys(ingredients)
                .map((key) => ingredients[key])
                .reduce((sum, value) => sum + value, 0);
            return { purchasable: sum > 0 };
        });
    };

    purchaseHandler = () => {
        this.setState({
            purchaseMode: true,
        });
    };

    purchaseCancleHanlder = () => {
        this.setState({
            purchaseMode: false,
        });
    };

    purchaseContinueHandler = () => {
        const queryParams = [];
        for (let ingredient in this.state.ingredients) {
            queryParams.push(
                `${encodeURIComponent(ingredient)}=${encodeURIComponent(
                    this.state.ingredients[ingredient]
                )}`
            );
        }
        const queryString = queryParams.join("&");
        this.props.history.push({
            pathname: "/checkout",
            search: `?${queryString}&price=${this.state.totalPrice.toFixed(2)}`,
        });
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice,
        });
        this.updatePurchangeseState();
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState({
            totalPrice: updatedPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchangeseState();
    };

    setIngredients() {
        Axios.get("/ingredients.json")
            .then((response) => {
                this.setState({ ingredients: response.data });
            })
            .catch((error) => error);
    }

    // componentDidMount() {
    //     this.setIngredients();
    // }
    constructor(props) {
        super(props);
        Axios.get("/ingredients.json")
            .then((response) => {
                this.setState({ ingredients: response.data });
            })
            .catch((error) => error);
    }

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let burgerSection = <Spinner />;
        let orderSummary = null;

        if (this.state.ingredients) {
            burgerSection = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        ordering={this.purchaseHandler}
                        purchasable={this.state.purchasable}
                    />
                </Aux>
            );
            orderSummary = (
                <OrderSummary
                    ingredients={this.state.ingredients}
                    price={this.state.totalPrice}
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

export default withErrorHandler(BurgerBuilder, Axios);
