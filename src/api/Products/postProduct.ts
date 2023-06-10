import {backendInstance} from "../api";
import {IProduct, ProductCreated} from "./types";

const postProduct = async (product: ProductCreated): Promise<IProduct> => {
    return (await backendInstance.post('/products', product)).data;
}

export {postProduct};