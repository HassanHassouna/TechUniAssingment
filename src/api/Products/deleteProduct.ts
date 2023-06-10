import {IProduct} from './types';
import {backendInstance} from '../api';

const deleteProduct = async (): Promise<IProduct> => {
    return (await backendInstance.delete('/products/:id')).data;
}

export {deleteProduct};