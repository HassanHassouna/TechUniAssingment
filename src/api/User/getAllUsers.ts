import {IUser} from "./types";
import {backendInstance} from "../api";

const getAllUsers = async (): Promise<IUser> => {
    return (await backendInstance.get('/users')).data;
}

export {getAllUsers};