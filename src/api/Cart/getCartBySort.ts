import {ICart} from './types';
import {backendInstance} from '../api';


const getCartBySort = async (): Promise<ICart> => {
    return (await backendInstance.get('/carts?sort=desc')).data;
}

export {getCartBySort};