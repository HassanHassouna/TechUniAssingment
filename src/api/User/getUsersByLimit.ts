import {IUser} from "./types";
import {backendInstance} from "../api";

const getUsersByLimit = async (): Promise<IUser> => {
    return (await backendInstance.get('/users?limit=5')).data;
}

export {getUsersByLimit};