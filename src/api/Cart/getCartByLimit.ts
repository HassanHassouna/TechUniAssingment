import {ICart} from './types';
import {backendInstance} from '../api';

const getCartByLimit = async (): Promise<ICart> => {
    return (await backendInstance.get('/carts?limit=5')).data;
}

export {getCartByLimit};