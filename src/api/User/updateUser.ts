import {IUser, UserUpdated} from "./types";
import {backendInstance} from "../api";

const updateUser = async (user: UserUpdated): Promise<IUser> => {
    return (await backendInstance.put('/users/:id', user)).data;
}

export {updateUser}