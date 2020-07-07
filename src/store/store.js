import { createStore } from "redux";

import burgerReducer from "./reducers/burger";

const store = createStore(burgerReducer);

export default store;
