import { combineReducers } from "redux";

import burgerBuilderReducer from "./burgerbuilder";
import orderReducer from "./order";
import authReducer from "./auth";

const reducer = combineReducers({
    burger: burgerBuilderReducer,
    order: orderReducer,
    auth: authReducer,
});

export default reducer;
