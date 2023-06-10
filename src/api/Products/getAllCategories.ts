import {backendInstance} from '../api';

const getAllCategories = async () => {
    return (await backendInstance.get('/products/categories')).data;
}

export {getAllCategories};