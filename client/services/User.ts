import { User } from "@/types/dataTypes";
import { flattenUserData } from "@/services/Utils";
import api from "./APIclient";


let user = {} as User;


export const initUser = async (): Promise<any> => {
    const u = await api.getuser("e14d0853-cda6-48a4-bf64-3a35a247e341");
    const res = flattenUserData(u);
    user = res.user;


    if (u === undefined || u === null)
        throw new Error("User not found");

    return res;
};


export const getUser = () => {
    return user;
};
