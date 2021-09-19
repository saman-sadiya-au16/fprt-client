import { galleryActionTypes } from "../../constants/galleryConstant";

let initState = {
    getAllImagesApiStatus: {},
    getAllUserImagesApiStatus: {},
    uploadImageApiStatus: {},
}

const galleryReducer = (state = initState, action) => { 
    switch (action.type) {
        case galleryActionTypes.GET_ALL_GALLERY_IMAGE_REQUEST:
            return {
                ...state,
                getAllImagesApiStatus: {
                    isLoading: true,
                }
            }
        case galleryActionTypes.GET_ALL_GALLERY_IMAGE_SUCCESS:
            return {
                ...state,
                getAllImagesApiStatus: {
                    isLoading: false,
                    status: 'success',
                    allImages: action.payload
                }
            }
        case galleryActionTypes.GET_ALL_GALLERY_IMAGE_FAILURE:
            return {
                ...state,
                getAllImagesApiStatus: {
                    isLoading: false,
                    status: 'failure',
                    allImages: [],
                }
            }
        case galleryActionTypes.GET_ALL_USER_IMAGE_REQUEST:
            return {
                ...state,
                getAllUserImagesApiStatus: {
                    isLoading: true,
                }
            }
        case galleryActionTypes.GET_ALL_USER_IMAGE_SUCCESS:
            return {
                ...state,
                getAllUserImagesApiStatus: {
                    isLoading: false,
                    status: 'success',
                    allImages: action.payload
                }
            }
        case galleryActionTypes.GET_ALL_USER_IMAGE_FAILURE:
            return {
                ...state,
                getAllUserImagesApiStatus: {
                    isLoading: false,
                    status: 'failure',
                    allImages: [],
                }
            }
        case galleryActionTypes.UPLOAD_IMAGE_REQUEST:
            return {
                ...state,
                uploadImageApiStatus: {
                    isLoading: true,
                }
            }
        case galleryActionTypes.UPLOAD_IMAGE_SUCCESS:
            return {
                ...state,
                uploadImageApiStatus: {
                    isLoading: false,
                    status: 'success',
                    data: action.payload
                }
            }
        case galleryActionTypes.UPLOAD_IMAGE_FAILURE:
            return {
                ...state,
                uploadImageApiStatus: {
                    isLoading: false,
                    status: 'failure',
                }
            }
        case galleryActionTypes.DELETE_IMAGE_REQUEST:
            return {
                ...state,
                deleteImageApiStatus: {
                    isLoading: true,
                }
            }
        case galleryActionTypes.DELETE_IMAGE_SUCCESS:
            return {
                ...state,
                deleteImagesApiStatus: {
                    isLoading: false,
                    status: 'success',
                    allImages: action.payload
                }
            }
        case galleryActionTypes.DELETE_IMAGE_FAILURE:
            return {
                ...state,
                deleteImageApiStatus: {
                    isLoading: false,
                    status: 'failure',
                }
            }
        default:
            return state;
    }
}

export default galleryReducer;