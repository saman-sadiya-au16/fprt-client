import { errorActionTypes } from "../constants/errorConstant";
import { galleryActionTypes } from "../constants/galleryConstant";
import galleryService from "../services/galleryService";

const getAllImages = () => {
    const request = () => ({ type: galleryActionTypes.GET_ALL_GALLERY_IMAGE_REQUEST });
    const success = (payload) => ({ type: galleryActionTypes.GET_ALL_GALLERY_IMAGE_SUCCESS, payload });
    const failure = () => ({ type: galleryActionTypes.GET_ALL_GALLERY_IMAGE_FAILURE });
    const setError = (error) => ({ type: errorActionTypes.SET_ERROR, error });

    return async (dispatch) => {
        dispatch(request());
        try {
            const response = await galleryService.getAllPublicImages();
            dispatch(success(response.data));
        } catch (e) {
            console.log(e);
            const error = {};
            console.log(e)
            error.message = e.response?.data.error;
            error.statusCode = e.response?.status
            dispatch(failure());
            dispatch(setError(error));
        }
    }
}

const getAllUserImages = () => {
    const request = () => ({ type: galleryActionTypes.GET_ALL_USER_IMAGE_REQUEST });
    const success = (payload) => ({ type: galleryActionTypes.GET_ALL_USER_IMAGE_SUCCESS, payload });
    const failure = () => ({ type: galleryActionTypes.GET_ALL_USER_IMAGE_REQUEST_FAILURE });
    const setError = (error) => ({ type: errorActionTypes.SET_ERROR, error });

    return async (dispatch, getState) => {
        const userId = getState()?.auth.user._id;
        const token = getState()?.auth.token;
        dispatch(request());
        try {
            const response = await galleryService.getAllUserImages(token, userId);
            dispatch(success(response.data));
        } catch (e) {
            console.log(e);
            const error = {};
            console.log(e)
            error.message = e.response?.data.error;
            error.statusCode = e.response?.status
            dispatch(failure());
            dispatch(setError(error));
        }
    }
}

const uploadImage = (formData) => {
    const request = () => ({ type: galleryActionTypes.UPLOAD_IMAGE_REQUEST});
    const success = (payload) => ({ type: galleryActionTypes.UPLOAD_IMAGE_SUCCESS, payload });
    const failure = () => ({ type: galleryActionTypes.UPLOAD_IMAGE_FAILURE });
    const setError = (error) => ({ type: errorActionTypes.SET_ERROR, error });

    return async (dispatch, getState) => {
        const userId = getState()?.auth.user._id;
        const token = getState()?.auth.token;
        dispatch(request());
        try {
            const response = await galleryService.uploadImage(token, userId, formData);
            dispatch(success(response.data));
        } catch (e) {
            console.log(e);
            const error = {};
            console.log(e)
            error.message = e.response?.data.error;
            error.statusCode = e.response?.status
            dispatch(failure());
            dispatch(setError(error));
        }
    }
}

const deleteImage = (imageId) => {
    const request = () => ({ type: galleryActionTypes.DELETE_IMAGE_REQUEST});
    const success = (payload) => ({ type: galleryActionTypes.DELETE_IMAGE_SUCCESS, payload });
    const failure = () => ({ type: galleryActionTypes.DELETE_IMAGE_FAILURE });
    const setError = (error) => ({ type: errorActionTypes.SET_ERROR, error });

    return async (dispatch, getState) => {
        const userId = getState()?.auth.user._id;
        const token = getState()?.auth.token;
        dispatch(request());
        try {
            const response = await galleryService.deleteImage(token, userId, imageId);
            dispatch(success(response.data));
            window.location.reload();
        } catch (e) {
            console.log(e);
            const error = {};
            console.log(e)
            error.message = e.response?.data.error;
            error.statusCode = e.response?.status
            dispatch(failure());
            dispatch(setError(error));
        }
    }
}

const galleryActions = {
    getAllImages,
    getAllUserImages,
    uploadImage,
    deleteImage,
}

export default galleryActions;