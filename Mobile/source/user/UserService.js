import axiosInstance from '../utils/axios';
import constans from '../utils/constans';

export const login = async (username, password) => {
    const data = {
        username: username,
        password: password
    }
    const res = await axiosInstance.post(constans.API_LOGIN, data);
    return res;
}

export const register = async (username, password, confirm_password) => {
    const data = {
        username: username,
        password: password,
        confirm_password: confirm_password,
    }
    const res = await axiosInstance.post(constans.API_REGISTER, data);
    return res;
}