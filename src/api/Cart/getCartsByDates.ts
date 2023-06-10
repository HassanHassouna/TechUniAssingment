import {ICart} from './types';
import {backendInstance} from '../api';


const getCartsByDates = async (startDate: string, endDate: string): Promise<ICart> => {
    return (await backendInstance.get(`/carts?startdate=${startDate}&enddate=${endDate}`)).data;
}

export {getCartsByDates};