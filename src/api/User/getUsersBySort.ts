import {IUser} from "./types";
import {backendInstance} from "../api";

const getUsersBySort = async (): Promise<IUser> => {
    return (await backendInstance.get('/users?sort=desc')).data;
}

export {getUsersBySort};