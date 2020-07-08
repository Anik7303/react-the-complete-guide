import { INGREDIENT_PRICES } from "../components/Burger/Ingredients/ingredients";

export const calculatePrice = (ingredients) => {
    return Number.parseFloat(
        Object.keys(ingredients)
            .map((key) => ({ name: key, amount: ingredients[key] }))
            .reduce((prev, curr) => {
                return prev + INGREDIENT_PRICES[curr.name] * curr.amount;
            }, 0)
            .toFixed(2)
    );
};
