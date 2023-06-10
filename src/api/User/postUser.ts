import {IUser, UserCreated} from "./types";
import {backendInstance} from "../api";

const postUser = async (user: UserCreated): Promise<IUser> => {
    return (await backendInstance.post('/users', user)).data;
}

export {postUser};