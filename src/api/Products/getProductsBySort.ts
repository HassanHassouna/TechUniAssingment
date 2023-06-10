import {IProduct} from "./types";
import {backendInstance} from "../api";

const getProductBySort = async (): Promise<IProduct> => {
    return (await backendInstance.get('/products?sort=desc')).data;
}

export {getProductBySort};