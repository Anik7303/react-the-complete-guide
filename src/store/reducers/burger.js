import * as actionTypes from "../actions";
import {
    INGREDIENTS,
    INGREDIENT_PRICES,
} from "../../components/Burger/Ingredients/ingredients";

const initialState = {
    ingredients: {
        [INGREDIENTS.SALAD]: 0,
        [INGREDIENTS.BACON]: 0,
        [INGREDIENTS.CHEESE]: 0,
        [INGREDIENTS.MEAT]: 0,
    },
    price: 4,
};
// const initialState = {
//     ingredients: null,
//     price: 4,
// };

const burgerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INGREDIENTS:
            return {
                ...state,
                ingredients: { ...action.ingredients },
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

        default:
            return state;
    }
};

export default burgerReducer;
