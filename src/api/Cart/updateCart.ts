import {CartUpdated, ICart} from './types';
import {backendInstance} from '../api';


const updateCart = async (data: CartUpdated): Promise<ICart> => {
    return await backendInstance.put('/carts/:id', data);
}

export {updateCart};