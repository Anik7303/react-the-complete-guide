import * as actionTypes from "../actions";

const initailState = { results: [] };

const results = (state = initailState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                results: state.results.concat({
                    _id: Math.random().toString(),
                    counter: action.counter,
                }),
            };
        case actionTypes.DELETE_RESULT:
            return {
                results: state.results.filter(
                    (result) => result._id !== action.id
                ),
            };
        default:
            return state;
    }
};

export default results;
