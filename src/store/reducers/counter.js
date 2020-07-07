import * as actionTypes from "../actions";

const initialState = { counter: 0 };

const counter = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD:
            return { counter: state.counter + action.value };
        case actionTypes.SUBTRACT:
            return { counter: state.counter - action.value };
        case actionTypes.DECREMENT:
            return { counter: state.counter - 1 };
        case actionTypes.INCREMENT:
            return { counter: state.counter + 1 };
        default:
            return state;
    }
};

export default counter;
