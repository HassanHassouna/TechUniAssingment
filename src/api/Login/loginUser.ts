import {ILogin} from "./types";
import {backendInstance} from "../api";

const loginUser = async (email: string, password: string): Promise<ILogin> => {
    return (await backendInstance.post("/auth/login", {email, password})).data;
}

export {loginUser}