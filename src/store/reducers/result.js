import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initailState = { results: [] };

const storeResult = (state, action) => {
    const updatedArray = state.results.concat({
        _id: Math.random().toString(),
        counter: action.counter,
    });
    return updateObject(state, { results: updatedArray });
};

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(
        (result) => result._id !== action.id
    );
    return updateObject(state, { results: updatedArray });
};

const results = (state = initailState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return storeResult(state, action);
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
};

export default results;
