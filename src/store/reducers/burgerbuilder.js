import * as actionTypes from "../actions/actionTypes";
import {
    // INGREDIENTS,
    INGREDIENT_PRICES,
} from "../../components/Burger/Ingredients/ingredients";
import { calculatePrice } from "../utility";

// const initialState = {
//     ingredients: {
//         [INGREDIENTS.SALAD]: 0,
//         [INGREDIENTS.BACON]: 0,
//         [INGREDIENTS.CHEESE]: 0,
//         [INGREDIENTS.MEAT]: 0,
//     },
//     price: 4.0,
// };
const initialState = {
    ingredients: null,
    price: 4.0,
    error: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: { ...action.ingredients },
                price: initialState.price + calculatePrice(action.ingredients),
            };
        case actionTypes.RESET_INGREDIENTS:
            return {
                ...state,
                ingredients: { ...initialState.ingredients },
                price: initialState.price,
            };
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]:
                        state.ingredients[action.ingredient] + 1,
                },
                price: Number.parseFloat(
                    (
                        state.price + INGREDIENT_PRICES[action.ingredient]
                    ).toFixed(2)
                ),
            };

        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredient]:
                        state.ingredients[action.ingredient] - 1,
                },
                price: Number.parseFloat(
                    (
                        state.price - INGREDIENT_PRICES[action.ingredient]
                    ).toFixed(2)
                ),
            };
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true,
            };

        default:
            return state;
    }
};

export default reducer;
