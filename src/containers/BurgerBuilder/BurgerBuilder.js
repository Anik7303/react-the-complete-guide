import React from "react";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Aux from "../../hoc/Auxiliary";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
    salad: 0.5,
};

class BurgerBuilder extends React.Component {
    state = {
        ingredients: {
            bacon: 0,
            cheese: 0,
            meat: 0,
            salad: 0,
        },
        totalPrice: 4,
        purchasable: false,
        purchaseMode: false,
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

    render() {
        const disabledInfo = { ...this.state.ingredients };
        for (const key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Modal
                    show={this.state.purchaseMode}
                    modalClosed={this.purchaseCancleHanlder}
                >
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
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
    }
}

export default BurgerBuilder;