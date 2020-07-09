import { INGREDIENT_PRICES } from "../components/Burger/Ingredients/ingredients";

const formatIngredients = (ingredients) => {
    return {
        salad: ingredients.salad,
        bacon: ingredients.bacon,
        cheese: ingredients.cheese,
        meat: ingredients.meat,
    };
};

const updateObject = (oldObject, updateProperties) => {
    return {
        ...oldObject,
        ...updateProperties,
    };
};

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

const setDataInStorage = (token, userId, expiresIn) => {
    localStorage.setItem("token", token);
    localStorage.setItem("userId", userId);
    localStorage.setItem("expiresIn", expiresIn);
};

const getDataFromStorage = () => {
    return {
        token: localStorage.getItem("token"),
        userId: localStorage.getItem("userId"),
        expiresIn: localStorage.getItem("expiresIn"),
    };
};

const clearStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("expiresIn");
};

export {
    formatIngredients,
    updateObject,
    calculatePrice,
    formatOrdersData,
    setDataInStorage,
    getDataFromStorage,
    clearStorage,
};
