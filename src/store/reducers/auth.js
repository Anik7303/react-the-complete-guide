import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    auth: {
        token: null,
        userId: null,
        email: null,
    },
    logoutTimer: null,
    error: null,
    isAuthenticated: false,
    authenticating: false,
    redirectPath: "/",
};

const authStart = (state, action) => {
    return updateObject(state, { authenticating: true });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        authenticating: false,
        isAuthenticated: true,
        auth: {
            token: action.token,
            refreshToken: action.refreshToken,
            userId: action.userId,
            email: action.email,
        },
        error: null,
    });
};

const authFailed = (state, action) => {
    return updateObject(state, {
        authenticating: false,
        error: action.error,
    });
};

const authLogout = (state, action) => {
    return updateObject(state, {
        auth: { ...initialState.auth },
        isAuthenticated: false,
        logoutTimer: null,
    });
};

const setLogoutTimerId = (state, action) => {
    return updateObject(state, { logoutTimer: action.timerId });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { redirectPath: action.path });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state, action);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        case actionTypes.AUTH_FAILED:
            return authFailed(state, action);
        case actionTypes.AUTH_LOGOUT:
            return authLogout(state, action);
        case actionTypes.SET_LOGOUT_TIMER_ID:
            return setLogoutTimerId(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH:
            return setAuthRedirectPath(state, action);
        default:
            return state;
    }
};

export default reducer;
