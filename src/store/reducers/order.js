import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
};

const reducer = (state = initialState, action) => {
    let updatedOrders = null;
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return updateObject(state, { loading: true, purchased: false });
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            updatedOrders = state.orders.concat({
                ...action.order,
                price: Number.parseFloat(action.order.price),
            });
            return updateObject(state, {
                orders: updatedOrders,
                loading: false,
                purchased: true,
            });
        case actionTypes.PURCHASE_BURGER_FAILED:
            return updatedOrders(state, { loading: false, purchased: false });
        case actionTypes.RESET_PURCHASED_STATE:
            return updateObject(state, { purchased: false });
        case actionTypes.FETCH_ORDER_START:
            return updateObject(state, { loading: true });
        case actionTypes.FETCH_ORDER_SUCCESS:
            updatedOrders = [...action.orders];
            return updateObject(state, {
                loading: false,
                orders: updatedOrders,
            });
        case actionTypes.FETCH_ORDER_FAILED:
            return updatedOrders(state, { loading: false });
        default:
            return state;
    }
};

export default reducer;
