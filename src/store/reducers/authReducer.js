import { authActionTypes } from "../../constants/authConstant";

let initState = {
    isLoggedIn: false,
    isLoading: false,
    showLogin: false,
}

const authReducer = (state = initState, action) =>{
    switch (action.type) {
        case authActionTypes.SEND_LOGIN_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case authActionTypes.SEND_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user,
                token: action.payload.token,
                isLoading: false,
            }
        case authActionTypes.SEND_LOGIN_FAILURE:
            return {
                ...state,
                isLoggedIn: false,
                isLoading: false,
            }
        case authActionTypes.SEND_SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case authActionTypes.SEND_SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                accountCreated: true
            }
        case authActionTypes.SEND_SIGNUP_FAILURE:
            return {
                ...state,
                isLoading: false,
            }
        case authActionTypes.TOGGLE_SHOW_LOGIN_FORM:
            return {
                ...state,
                showLogin: !state.showLogin,
            }
        case authActionTypes.SHOW_LOGIN_FORM:
            return {
                ...state,
                showLogin: true,
            }
        case authActionTypes.HIDE_LOGIN_FORM:
            return {
                ...state,
                showLogin: false,
            }
        case authActionTypes.LOGOUT:
            return {
                isLoggedIn: false,
                isLoading: false,
                showLogin: true,
            }
        default:
            return state
    }
}

export default authReducer;