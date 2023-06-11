import {ICart} from './types';
import {backendInstance} from '../api';

const getCartByLimit = async (limit: number): Promise<ICart> => {
    return (await backendInstance.get(`/carts?limit=${limit}`)).data;
}
export {getCartByLimit};