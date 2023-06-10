import {backendInstance} from "../api";
import {IProduct} from './types';

const getProductBySpecificCategory = async (category: string): Promise<IProduct> => {
    return (await backendInstance.get(`/products/category/${category}`)).data;
}

export {getProductBySpecificCategory};