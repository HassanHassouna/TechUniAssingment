import {CartCreated, ICart} from './types';
import {backendInstance} from '../api';


const postCart = async (cart: CartCreated): Promise<ICart> => {
    return (await backendInstance.post('/cart', cart)).data;
}

export {postCart};