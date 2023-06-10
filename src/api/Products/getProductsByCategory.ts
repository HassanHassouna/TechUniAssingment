import {backendInstance} from "../api";
import {IProduct} from './types';

const getProductsByCategory = async (): Promise<IProduct> => {
    return (await backendInstance.get('/products/categories')).data;
}

const getProductBySpecificCategory = async (category: string): Promise<IProduct> => {
    return (await backendInstance.get(`/products/categories/${category}`)).data;
}

export {getProductsByCategory, getProductBySpecificCategory};