import { createStore, combineReducers } from "redux";

// import reducer from "./reducer";
import counterReducer from "./reducers/counter";
import resultsReducer from "./reducers/result";

const rootReducer = combineReducers({
    counterState: counterReducer,
    resultsState: resultsReducer,
});

const store = createStore(rootReducer);

export default store;
