import {backendInstance} from "../api";
import {IProduct} from './types';

const getProductByLimit = async (): Promise<IProduct> => {
    return (await backendInstance.get('/products?limit=5')).data;
}

export {getProductByLimit};