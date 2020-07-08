import * as actionTypes from "./actionTypes";
import Axios from "axios";

const API_KEY = "AIzaSyDD6O7b7675D4UgT4mXfHLr4YiIHeTRg1o";
const SIGH_UP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const SIGN_IN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: authData.token,
        userId: authData.userId,
        email: authData.email,
        refreshToken: authData.refreshToken,
    };
};

const authFailed = (error) => {
    return {
        type: actionTypes.AUTH_FAILED,
        error: error,
    };
};

const auth = (authData) => {
    return (dispatch) => {
        dispatch(authStart());
        const payload = {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
        };
        let url = SIGH_UP_URL;
        if (!authData.signupMode) {
            url = SIGN_IN_URL;
        }
        Axios.post(url, payload)
            .then((response) => {
                console.log(response);
                const authData = {
                    token: response.data.idToken,
                    userId: response.data.localId,
                    refreshToken: response.data.refreshToken,
                    email: response.data.email,
                };
                dispatch(authSuccess(authData));
                dispatch(
                    checkAuthTimeout(
                        Number.parseInt(response.data.expiresIn, 10) * 1000
                    )
                );
            })
            .catch((error) => dispatch(authFailed(error.response.data.error)));
    };
};

const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

const logout = () => {
    return (dispatch, getState) => {
        clearTimeout(getState().auth.logoutTimer);
        dispatch(authLogout());
    };
};

const checkAuthTimeout = (expirationTime) => {
    return (dispatch) => {
        const logoutTimerId = setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
        dispatch(setLogoutTimerId(logoutTimerId));
    };
};

const setLogoutTimerId = (timerId) => {
    return {
        type: actionTypes.SET_LOGOUT_TIMER_ID,
        timerId: timerId,
    };
};

export { auth, logout };
