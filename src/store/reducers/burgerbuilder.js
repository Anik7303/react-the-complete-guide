import * as actionTypes from "../actions/actionTypes";
import { INGREDIENT_PRICES } from "../../components/Burger/Ingredients/ingredients";
import { updateObject, calculatePrice } from "../utility";

const initialState = {
    ingredients: null,
    price: 4.0,
    error: false,
};

const reducer = (state = initialState, action) => {
    let updatedIngredients = null;
    let updatedPrice = null;
    switch (action.type) {
        case actionTypes.SET_INGREDIENTS:
            updatedIngredients = { ...action.ingredients };
            updatedPrice =
                initialState.price + calculatePrice(action.ingredients);
            return updateObject(state, {
                ingredients: updatedIngredients,
                price: updatedPrice,
            });
        case actionTypes.RESET_INGREDIENTS:
            return updateObject(state, {
                ingredients: { ...initialState.ingredients },
                price: initialState.price,
            });
        case actionTypes.ADD_INGREDIENT:
            updatedIngredients = {
                ...state.ingredients,
                [action.ingredient]: state.ingredients[action.ingredient] + 1,
            };
            updatedPrice = Number.parseFloat(
                (state.price + INGREDIENT_PRICES[action.ingredient]).toFixed(2)
            );
            return updateObject(state, {
                ingredients: updatedIngredients,
                price: updatedPrice,
            });

        case actionTypes.REMOVE_INGREDIENT:
            updatedIngredients = {
                ...state.ingredients,
                [action.ingredient]: state.ingredients[action.ingredient] - 1,
            };
            updatedPrice = Number.parseFloat(
                (state.price - INGREDIENT_PRICES[action.ingredient]).toFixed(2)
            );
            return updateObject(state, {
                ingredients: updatedIngredients,
                price: updatedPrice,
            });
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return updateObject(state, { error: true });

        default:
            return state;
    }
};

export default reducer;
