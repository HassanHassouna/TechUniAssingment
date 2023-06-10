import {IProduct} from './types';
import {backendInstance} from '../api';

const getAllProducts = async (): Promise<IProduct> => {
    return (await backendInstance.get('/products')).data;
}

export {getAllProducts};