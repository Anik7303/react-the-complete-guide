import * as actionTypes from "./actions";

const initialState = { counter: 0, results: [] };

const reducer = (state = initialState, action) => {
    let tempResults = null;
    switch (action.type) {
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value,
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value,
            };
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            };
        case actionTypes.STORE_RESULT:
            // tempResults = [...state.results].map((item) => ({ ...item }));
            // tempResults.push({
            //     id: Math.random().toString(),
            //     counter: state.counter,
            // });
            // return {
            //     ...state,
            //     results: tempResults,
            // };
            return {
                ...state,
                results: state.results.concat({
                    _id: Math.random().toString(),
                    counter: state.counter,
                }),
            };
        case actionTypes.DELETE_RESULT:
            tempResults = state.results.filter(
                (result) => result._id !== action.id
            );
            return {
                ...state,
                results: tempResults,
            };
        default:
            return state;
    }
};

export default reducer;
