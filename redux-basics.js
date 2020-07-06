const redux = require("redux");

// Reducers
const initialState = { counter: 0 };
const rootReducer = (state = initialState, action) => {
    let temp = null;
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1,
            };
        case "ADD":
            return {
                ...state,
                counter: state.counter + action.value,
            };
            break;
        default:
            console.log("wrong action type used");
    }
    return state;
};

// Store
const store = redux.createStore(rootReducer);
console.log(store.getState());

// Subcription
store.subscribe(() => {
    console.log("[Subscribe] state: ", store.getState());
});

// Displaching Action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADD", value: 5 });
