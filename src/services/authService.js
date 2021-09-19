import axios from "axios";
import { baseUrl } from "../constants/backendConstant"


const loginUser = async (email, password) => {
    const url = `${baseUrl}/signin`;
    const data = { email, password }
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        responseType: 'json',
        responseEncoding: 'utf8',
        url,
        data,
    }
    const result = await axios(options);
    return result;
}

const signupUser = async (email, password, name) => {
    const url = `${baseUrl}/signup`;
    const data = { email, password, name }
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        responseType: 'json',
        responseEncoding: 'utf8',
        url,
        data,
    }
    const result = await axios(options);
    return result;
}

const authService = {
    loginUser,
    signupUser
}

export default authService;