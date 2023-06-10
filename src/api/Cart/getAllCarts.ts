import {ICart} from './types';
import {backendInstance} from '../api';


const getAllCarts = async (): Promise<ICart> => {
    return (await backendInstance.get('/carts')).data;
}

export {getAllCarts};