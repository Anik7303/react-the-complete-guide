import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

const purchaseBurgerSuccess = (order) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        order: order,
    };
};

const purchaseBurgerFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error,
    };
};

const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START,
    };
};

const purchaseBurger = (order) => {
    return (dispatch) => {
        dispatch(purchaseBurgerStart());
        axios
            .post("/orders.json", order)
            .then((response) => {
                const updatedOrder = { ...order, _id: response.data.name };
                console.log("[orderActions] ", updatedOrder, response.data);
                dispatch(purchaseBurgerSuccess(updatedOrder));
            })
            .catch((err) => dispatch(purchaseBurgerFailed(err)));
    };
};

const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START,
    };
};

const fetchOrderSuccess = () => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
    };
};

const fetchOrderFailed = (error) => {
    return {
        type: actionTypes.FETCH_ORDER_FAILED,
        error: error,
    };
};

const fetchOrders = () => {
    return (dispatch) => {
        dispatch(fetchOrderStart());
        axios
            .get("/orders.json")
            .then((response) => {
                console.log(response);
                dispatch(fetchOrderSuccess(response.data));
            })
            .catch((error) => dispatch(fetchOrderFailed(error)));
    };
};

export { purchaseBurger, fetchOrders };
