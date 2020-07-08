import { INGREDIENT_PRICES } from "../components/Burger/Ingredients/ingredients";

const calculatePrice = (ingredients) => {
    return Number.parseFloat(
        Object.keys(ingredients)
            .map((key) => ({ name: key, amount: ingredients[key] }))
            .reduce((prev, curr) => {
                return prev + INGREDIENT_PRICES[curr.name] * curr.amount;
            }, 0)
            .toFixed(2)
    );
};

const formatOrdersData = (ordersData) => {
    return Object.keys(ordersData).map((orderId) => {
        return {
            _id: orderId,
            ...ordersData[orderId],
            price: Number.parseFloat(ordersData[orderId].price),
        };
    });
};

export { calculatePrice, formatOrdersData };
