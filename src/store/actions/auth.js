import * as actionTypes from "./actionTypes";
import Axios from "axios";
import { setDataInStorage, getDataFromStorage, clearStorage } from "../utility";

const API_KEY = process.env.API_KEY || "not-provided";
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
                const authData = {
                    token: response.data.idToken,
                    userId: response.data.localId,
                    refreshToken: response.data.refreshToken,
                    email: response.data.email,
                };
                const expiresIn = new Date(
                    new Date().getTime() + response.data.expiresIn * 1000
                ).getTime();
                setDataInStorage(authData.token, authData.userId, expiresIn);
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
        clearStorage();
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

const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path,
    };
};

const checkAuthStatus = () => {
    return (dispatch) => {
        const data = getDataFromStorage();
        if (data.token) {
            if (data.expiresIn > new Date().getTime()) {
                const authData = {
                    token: data.token,
                    userId: data.userId,
                };
                dispatch(authSuccess(authData));
                const expireTime = data.expiresIn - new Date().getTime();
                dispatch(checkAuthTimeout(parseInt(expireTime, 10)));
            }
        }
    };
};

export { auth, logout, setAuthRedirectPath, checkAuthStatus };
