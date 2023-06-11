import {IProduct} from "./types";
import {backendInstance} from "../api";

const getProductBySort = async (sort: string): Promise<IProduct> => {
    return (await backendInstance.get(`/products?sort=${sort}`)).data;
}

export {getProductBySort};