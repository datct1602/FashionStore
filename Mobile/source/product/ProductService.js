import axiosInstance from '../utils/axios'
import constans from "../utils/constans";

export const getProducts = async () => {
    const res = await axiosInstance.get(constans.API_PRODUCTS);
    return res;
}

export const getProductById = async (id) => {
    const res = await axiosInstance.get(`${constans.API_PRODUCTS_BY_ID}/${id}/detail`);

    return res;
}