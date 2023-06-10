import {IUser} from "./types";
import {backendInstance} from "../api";

const getUserById = async (): Promise<IUser> => {
    return (await backendInstance.get('/users/:id')).data;
}