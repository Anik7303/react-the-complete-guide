import * as actionTypes from "../actions/actionTypes";

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading: true,
                purchased: false,
            };
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            return {
                ...state,
                orders: state.orders.concat({
                    ...action.order,
                    price: Number.parseFloat(action.order.price),
                }),
                loading: false,
                purchased: true,
            };
        case actionTypes.PURCHASE_BURGER_FAILED:
            return {
                ...state,
                loading: false,
                purchased: false,
            };
        case actionTypes.FETCH_ORDER_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: [...action.orders],
            };
        case actionTypes.FETCH_ORDER_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
