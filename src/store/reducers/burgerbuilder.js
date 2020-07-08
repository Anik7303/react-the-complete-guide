import * as actionTypes from "../actions/actionTypes";
import { INGREDIENT_PRICES } from "../../components/Burger/Ingredients/ingredients";
import { updateObject, calculatePrice } from "../utility";

const initialState = {
    ingredients: null,
    price: 4.0,
    error: false,
};

const setIngredients = (state, action) => {
    const updatedIngredients = { ...action.ingredients };
    const updatedPrice =
        initialState.price + calculatePrice(action.ingredients);
    return updateObject(state, {
        ingredients: updatedIngredients,
        price: updatedPrice,
    });
};

const resetIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: { ...initialState.ingredients },
        price: initialState.price,
    });
};

const addIngredient = (state, action) => {
    const updatedIngredients = {
        ...state.ingredients,
        [action.ingredient]: state.ingredients[action.ingredient] + 1,
    };
    const updatedPrice = Number.parseFloat(
        (state.price + INGREDIENT_PRICES[action.ingredient]).toFixed(2)
    );
    return updateObject(state, {
        ingredients: updatedIngredients,
        price: updatedPrice,
    });
};

const removeIngredient = (state, action) => {
    const updatedIngredients = {
        ...state.ingredients,
        [action.ingredient]: state.ingredients[action.ingredient] - 1,
    };
    const updatedPrice = Number.parseFloat(
        (state.price - INGREDIENT_PRICES[action.ingredient]).toFixed(2)
    );
    return updateObject(state, {
        ingredients: updatedIngredients,
        price: updatedPrice,
    });
};

const fetchIngredientsFailed = (state, action) => {
    return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
        case actionTypes.RESET_INGREDIENTS:
            return resetIngredients(state, action);
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state, action);
        default:
            return state;
    }
};

export default reducer;
