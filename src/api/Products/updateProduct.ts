import {IProduct, ProductUpdated} from "./types";
import {backendInstance} from "../api";

const updateProduct = async (data: ProductUpdated): Promise<IProduct> => {
    return await backendInstance.put('/products/:id', data);
}

export {updateProduct};