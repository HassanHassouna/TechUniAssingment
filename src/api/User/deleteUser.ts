import {IUser, UserUpdated} from "./types";
import {backendInstance} from "../api";

const deleteUser = async (): Promise<IUser> => {
    return (await backendInstance.delete('/users/:id')).data;
}

export {deleteUser}