import { combineReducers } from "redux";
import error from './errorReducer';
import auth from './authReducer';
import gallery from './galleryReducer';

const rootReducer = combineReducers({
    auth,
    error,
    gallery,
});

export default rootReducer;