import * as actionTypes from "./actionTypes";
import axios from "../../axios";
import { formatOrdersData } from "../utility";

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

const fetchOrderSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        orders: orders,
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
                dispatch(fetchOrderSuccess(formatOrdersData(response.data)));
            })
            .catch((error) => dispatch(fetchOrderFailed(error)));
    };
};

const resetPurchasedState = () => {
    return {
        type: actionTypes.RESET_PURCHASED_STATE,
    };
};

export { purchaseBurger, resetPurchasedState, fetchOrders };
