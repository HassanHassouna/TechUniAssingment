import {backendInstance} from "../api";
import {IProduct} from './types';

const getProductByLimit = async (limit: number): Promise<IProduct> => {
    return (await backendInstance.get(`/products?limit=${limit}`)).data;
}

export {getProductByLimit};