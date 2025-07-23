import { User } from "@/types/dataTypes";
import { user as dummyUser } from "@/constants/dummyData";
import { getValues, setValues } from "@/services/Utils";


let user = {} as User;


export const initUser = async (): Promise<User> => {
    const userData = await getValues("user");
    user = userData || dummyUser;

    await setValues("user", user);

    return user;
};


export const getUser = () => {
    return user;
};


export const updateUser = async (updatedUser: Partial<User>): Promise<User> => {
    user = { ...user, ...updatedUser };

    await setValues("user", user);

    return user;
};