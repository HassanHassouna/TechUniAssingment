import {ICart} from './types';
import {backendInstance} from '../api';

const getCartById = async (): Promise<ICart> => {
    return (await backendInstance.get('/carts/:id')).data;
}

export {getCartById};