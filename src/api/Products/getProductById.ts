import {IProduct} from './types';
import {backendInstance} from '../api';

const getProductById = async (): Promise<IProduct> => {
    return (await backendInstance.get('/products/:id')).data;
}

export {getProductById};