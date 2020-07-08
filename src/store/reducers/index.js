import { combineReducers } from "redux";

import burgerBuilderReducer from "./burgerbuilder";
import orderReducer from "./order";

const reducer = combineReducers({
    burger: burgerBuilderReducer,
    order: orderReducer,
});

export default reducer;
