import * as actionTypes from "./actionTypes";
import axios from "../../axios";
import { formatOrdersData } from "../utility";
import * as actions from "./index";

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

const purchaseBurger = (order, token) => {
    return (dispatch) => {
        dispatch(purchaseBurgerStart());
        axios
            .post(`/orders.json?auth=${token}`, order)
            .then((response) => {
                const updatedOrder = { ...order, _id: response.data.name };
                dispatch(actions.resetBurgerBuilding());
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

const fetchOrders = (token, userId) => {
    return (dispatch) => {
        dispatch(fetchOrderStart());
        axios
            .get(`/orders.json?auth=${token}`)
            .then((response) => {
                const orders = formatOrdersData(response.data).filter(
                    (order) => order.orderData.userId === userId
                );
                dispatch(fetchOrderSuccess(orders));
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
