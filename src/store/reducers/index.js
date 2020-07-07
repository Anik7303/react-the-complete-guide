import { combineReducers } from "redux";

import counterReducer from "./counter";
import resultReducer from "./result";

const rootReducer = combineReducers({
    counterState: counterReducer,
    resultsState: resultReducer,
});

export default rootReducer;
