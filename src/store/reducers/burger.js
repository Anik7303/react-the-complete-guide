import * as actionTypes from "../actions";
import INGREDIENT_PRICES from "../../components/Burger/IngredientPrices/ingredientPrices";

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
    },
    price: 4,
};

const burgerReducer = (state = initialState, action) => {
    let temp = null;
    // let temp = { ...state, ingredients: { ...state.ingredients } };
    let element = null;
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            element = action.ingredient;
            temp = {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [element]: state.ingredients[element] + 1,
                },
                price: state.price + INGREDIENT_PRICES[element],
            };
            console.log("[burgerReducer] state: ", temp);
            // temp.ingredients[action.ingredient] =
            //     temp.ingredients[action.ingredient] + 1;
            return temp;

        case actionTypes.REMOVE_INGREDIENT:
            element = action.ingredient;
            temp = {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [element]: state.ingredients[element] - 1,
                },
                price: state.price - INGREDIENT_PRICES[element],
            };
            console.log("[burgerReducer] state: ", temp);
            // temp.ingredients[action.ingredient] =
            //     temp.ingredients[action.ingredient] - 1;
            return temp;

        // case actionTypes.INCREASE_PRICE:
        //     temp = {
        //         ...state,
        //         ingredients: { ...state.ingredients },
        //         price: state.price + action.price,
        //     };
        //     console.log("[burgerReducer] state: ", temp);
        //     return temp;

        // case actionTypes.DECREASE_PRICE:
        //     temp = {
        //         ...state,
        //         ingredients: { ...state.ingredients },
        //         price: state.price - action.price,
        //     };
        //     console.log("[burgerReducer] state: ", temp);
        //     return temp;

        default:
            return state;
    }
};

export default burgerReducer;
