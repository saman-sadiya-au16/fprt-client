import { errorActionTypes } from "../../constants/errorConstant";
import { authActionTypes } from "../../constants/authConstant";

let initState = {
    isSet: false,
    message: '',
    statusCode: null
}

const errorReducer = (state = initState, action) =>{
    switch (action.type) {
        case errorActionTypes.SET_ERROR:
            if (action.error && action.error.similarWordsData) {
                return {
                    isSet: true,
                    message: action.error ? action.error.message : 'NO INTERNET',
                    statusCode: action.error?.statusCode,
                    similarWordsData: action.error.similarWordsData
                }          
            } else {
                return {
                    isSet: true,
                    message: action.error ? action.error.message : 'NO INTERNET',
                    statusCode: action.error?.statusCode,
                }          
            }
        case errorActionTypes.RESET_ERROR:
            return {
                isSet: false,
                message: '',
                statusCode: null
            }
        case authActionTypes.LOGOUT:
            return {
                isSet: false,
                message: '',
                statusCode: null
            }
        default:
            return state
    }
}

export default errorReducer;