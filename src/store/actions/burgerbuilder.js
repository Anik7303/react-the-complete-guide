import * as actionTypes from "./actionTypes";
import axios from "axios";

const addIngredient = (ingredient) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredient: ingredient,
    };
};

const removeIngredient = (ingredient) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredient: ingredient,
    };
};

const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients,
    };
};

const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED,
    };
};

const initIngredients = () => {
    return (dispatch) => {
        axios
            .get(
                "https://react-burger-builder-71796.firebaseio.com/ingredients.json"
            )
            .then((response) => {
                dispatch(setIngredients(response.data));
            })
            .catch((error) => {
                fetchIngredientsFailed();
            });
    };
};

const resetIngredients = () => {
    return {
        type: actionTypes.RESET_INGREDIENTS,
    };
};

export {
    addIngredient,
    removeIngredient,
    setIngredients,
    resetIngredients,
    initIngredients,
};
