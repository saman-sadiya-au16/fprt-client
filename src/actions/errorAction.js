import { errorActionTypes } from "../constants/errorConstant"


const resetError = () => {
    const reset = () => ({ type: errorActionTypes.RESET_ERROR  });
    return async (dispatch) => {
        dispatch(reset());
    }
};

const errorActions = {
    resetError,
}

export default errorActions;