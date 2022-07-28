import React, { useState, createContext } from 'react'
import { getProducts, getProductById } from './ProductService';

export const ProductContext = createContext();

export const ProductContextProvider = (props) => {
    const { children } = props;
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});

    const onGetProducts = async () => {
        try {
            const result = await getProducts();     
            console.log('result:',result)       
            if (result) setProducts(result);
        } catch (error) {
            console.log("GetProducts Failed : ", error)
        }
    }


    const onGetProductById = async (id) => {
        try {
            const res = await getProductById(id);
            console.log('GetProductById : ', res)
            if(res) setProduct(res);
        } catch (error) {
        }
    }

    return (
        <ProductContext.Provider
            value={{
                onGetProducts, onGetProductById, products, product,
            }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext