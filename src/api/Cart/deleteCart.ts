import {ICart} from './types';
import {backendInstance} from '../api';

const deleteCart = async (): Promise<ICart> => {
    return (await backendInstance.delete('/carts/:id')).data;
}

export {deleteCart};