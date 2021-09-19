import axios from "axios";
import { baseUrl } from "../constants/backendConstant";

const getAllPublicImages = async () => {
    const url = `${baseUrl}/user/image/public`;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
        },
        responseType: 'json',
        responseEncoding: 'utf8',
        url,
    }
    const result = await axios(options);
    return result;
};

const getAllUserImages = async (token, userId) => {
    const url = `${baseUrl}/user/${userId}/image`;
    const options = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        responseType: 'json',
        responseEncoding: 'utf8',
        url,
    }
    const result = await axios(options);
    return result;
};

const uploadImage = async (token, userId, formData) => {
    const url = `${baseUrl}/user/${userId}/image`;
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        },
        url,
        data: formData
    }
    const result = await axios(options);
    return result;
};

// /user/:userId/image/:imageId

const deleteImage = async (token, userId, imageId) => {
    const url = `${baseUrl}/user/${userId}/image/${imageId}`;
    const options = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        responseType: 'json',
        responseEncoding: 'utf8',
        url,
    }
    const result = await axios(options);
    return result;
};

const galleryService = {
    getAllPublicImages,
    getAllUserImages,
    uploadImage,
    deleteImage,
}

export default galleryService;